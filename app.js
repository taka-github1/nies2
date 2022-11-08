var breakpoint_width = 600;
var map = null;
var view = null;
var charts = {};
var drawnCharts = {
  minYear: 9999,
  maxYear: 0,
  minValue: 9999,
  maxValue: 0,
  chartElements: {}
}

//configの読み込み
var json_url = "aplat_setting.json";
$.ajaxSetup({ async: false });
$.getJSON(json_url, function (json) {
  config = json;
});
$.ajaxSetup({ async: true });


var base_webmap_id = config.base_webmap_id;
var basemap_group_id = config.basemap_group_id;
var default_extend = config.default_extend;

//グラフ複数選択要素
var graphElements = config.chart_setting.elements;

//URLパラメータの取得
var urlParameters = {
  "display": getParam("display"),
  "kansho": getParam("kansho"),
  "shihyo": getParam("shihyo"),
  "year": getParam("year"),
  "month": getParam("month"),
  "prefecture1": getParam("prefecture1"),
  "observatory1": getParam("observatory1"),
  "prefecture2": getParam("prefecture2"),
  "observatory2": getParam("observatory2"),
  "prefecture3": getParam("prefecture3"),
  "observatory3": getParam("observatory3"),
  "expand": getParam("expand"),
}

require([
  "esri/portal/Portal",
  "esri/identity/OAuthInfo",
  "esri/identity/IdentityManager",
  "esri/Map",
  "esri/WebMap",
  "esri/Basemap",
  "esri/views/MapView",
  "esri/layers/TileLayer",
  "esri/layers/FeatureLayer",
  "esri/widgets/Home",
  "esri/widgets/Swipe",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Slider",
  "esri/geometry/Extent",
  "esri/renderers/Renderer",
  "esri/widgets/BasemapGallery/support/LocalBasemapsSource"
], function (Portal, OAuthInfo, identityManager, Map, WebMap, Basemap, MapView, TileLayer, FeatureLayer,
  Home, Swipe, Legend, Expand, BasemapGallery, Slider, Extent, Renderer, LocalBasemapsSource) {

  var portalUrl = "https://nies.maps.arcgis.com";

  var info = new OAuthInfo({
    appId: config.appId,
    popup: false
  });

  identityManager.registerOAuthInfos([info]);
  identityManager.getCredential(portalUrl);

  initForm();

  map = new WebMap({
    portalItem: {
      id: base_webmap_id
    }
  });

  view = new MapView({
    container: "mapviewCanvas",
    map: map,
    zoom: 14,
    constraints: {
      minScale: 50000000,
      maxScale: 250000
    }
  });

  var shihyoLayer = null;

  var homeBtn = new Home({
    view: view
  });
  view.ui.add(homeBtn, "top-left");

  var basemapGallery = new BasemapGallery({
    view: view,
    source: {
      query: {
        id: basemap_group_id
      }
    },
    container: document.createElement("div")
  });

  var legend = new Legend({
    view: view
  });

  var lgExpand = new Expand({
    view: view,
    content: legend,
    expanded: true,
    mode: "floating"
  });

  view.ui.add(lgExpand, "bottom-right");

  var bgExpand = new Expand({
    view: view,
    content: basemapGallery,
    expanded: false,
    mode: "floating"
  });

  basemapGallery.watch("activeBasemap", function () {
    var mobileSize =
      view.heightBreakpoint === "xsmall" ||
      view.widthBreakpoint === "xsmall";

    if (mobileSize) {
      bgExpand.collapse();
    }
  });
  view.ui.add(bgExpand, "top-right");

  var yearSlider = new Slider({
    container: "yearselector",
    steps: 1,
    labelInputsEnabled: true,
    labelFormatFunction: function (value, type) {
      return value + "年";
    },
    values: [config.defalt_year],
    visibleElements: {
      labels: true,
      rangeLabels: true
    }
  });

  map.when(function () {
    setForm(true);


    //修正
    if (urlParameters.prefecture1 || urlParameters.observatory1) {
      setMapLayerFilter(true);
    } else {
      setMapLayerFilter(false);
    }

    draw_charts();
  });

  view.extent = default_extend;


  //イベント処理
  $('#attentionButton').click(function () {
    $('#attentionDialog').fadeIn();
  });

  $('#agreebutton').click(function () {
    $(this).parents('#attentionDialog').fadeOut();
  });

  $('#smartFooterButton').click(function () {
    $('#smartFooterDialog').fadeIn();
  });

  $('#closebutton').click(function () {
    $(this).parents('#smartFooterDialog').fadeOut();
  });

  $('#displayselector').on("calciteRadioGroupChange", function (event) {
    if (event.target.value == "mapview") {
      $("#mapviewDiv").show();
      $("#graphviewDiv").hide();
      $("#map_observatory").show();
      $("#graph_observatory").hide();
      $(".subObservatory").hide();
    } else {
      $("#mapviewDiv").hide();
      $("#graphviewDiv").show();
      $("#map_observatory").hide();
      $("#graph_observatory").show();
      $(".subObservatory").show();
    }
    setForm(false);
  });

  $('#shihyoselector').on("calciteSelectChange", function (event) {
    setForm(false);
    setMapLayerFilter(true);
    draw_charts();
  });

  $('#kanshoselector').on("calciteRadioGroupChange", function (event) {
    setForm(false);

    for (const graphElement of graphElements) {
      setObservatoryselector(graphElement, false);
    }
    setMapLayerFilter(true);
    draw_charts();
  });

  for (const graphElement of graphElements) {
    $(`#${graphElement.prefectureSecector}`).on("calciteSelectChange", function (event) {
      setObservatoryselector(graphElement, true);
      setForm(false);
      setMapLayerFilter(true);
      draw_charts();
    });

    $(`#${graphElement.observatorySecector}`).on("calciteSelectChange", function (event) {
      setForm(false);
      setMapLayerFilter(true);
      draw_charts();
    });

    //グラフ拡大ボタンのクリック
    $(`#${graphElement.expand}`).on("click", function (event) {
      //修正
      $('#chartDialog').fadeIn();

      //グラフの表示
      if (drawnCharts.chartElements["chartDialogCanvas"]) {
        drawnCharts.chartElements["chartDialogCanvas"].destroy();
      }

      let chartData = JSON.parse(JSON.stringify(drawnCharts.chartDatas[graphElement.canvas]));
      chartData.canvas = "chartDialogCanvas";
      drawnCharts.chartDatas[chartData.canvas] = chartData;
      update_chart(chartData);

      $("#exportsizeselector").val("SVGA");
      $("#chartDialogCanvas").attr('width', 800);
      $("#chartDialogCanvas").attr('height', 600);
      $("#chartDialogContent").css('width', 800);
      $("#chartDialogContent").css('height', 600);
    });
  }

  $("#saveChartImage").on("click", function (event) {
    const chartData = drawnCharts.chartDatas["chartDialogCanvas"]

    var export_text = chartData.title + "_グラフ";
    var ctx = document.getElementById("chartDialogCanvas");

    // switch ($("#exportsizeselector").val()) {
    //   case "SVGA":
    //     ctx.width = 800;
    //     ctx.height = 600;
    //     break;
    //   case "XGA":
    //     ctx.width = 1024;
    //     ctx.height = 768;
    //     break;
    //   case "WXGA":
    //     ctx.width = 1280;
    //     ctx.height = 800;
    //     break;
    //   default:
    //     break;
    // }

    var a = document.createElement('a');
    a.href = ctx.toDataURL();
    a.download = export_text + '.png';
    a.click();

  });

  $("#chartDialogClose").on("click", function (event) {
    $('#chartDialog').fadeOut();
  });

  yearSlider.on("thumb-change", function (event) {
    setMapLayerFilter(false);
  });
  yearSlider.on("thumb-drag", function (event) {
    setMapLayerFilter(false);
  });

  $('#monthselector').on("calciteSelectChange", function (event) {
    setForm(false);
    setMapLayerFilter(false);
    draw_charts();
  });

  $('#csv_observatory').click(function () {
    download_csv(0);
  });

  $('#csv_maparea').click(function () {
    download_csv(1);
  });

  $('#map_observatory').click(function () {
    startMapDownload();
  });

  // $('#graph_observatory').click(function () {
  //   startGraphDownload();
  // });

  //グラフサイズ変更
  //修正
  $('#exportsizeselector').on("calciteSelectChange", function (event) {

    switch ($("#exportsizeselector").val()) {
      case "SVGA":
        $("#chartDialogCanvas").attr('width', 800);
        $("#chartDialogCanvas").attr('height', 600);
        $("#chartDialogContent").css('width', 800);
        $("#chartDialogContent").css('height', 600);
        break;
      case "XGA":
        $("#chartDialogCanvas").attr('width', 1024);
        $("#chartDialogCanvas").attr('height', 768);
        $("#chartDialogContent").css('width', 1024);
        $("#chartDialogContent").css('height', 768);
        break;
      case "WXGA":
        $("#chartDialogCanvas").attr('width', 1280);
        $("#chartDialogCanvas").attr('height', 800);
        $("#chartDialogContent").css('width', 1280);
        $("#chartDialogContent").css('height', 800);
        break;
      default:
        break;
    }
    drawnCharts.chartElements["chartDialogCanvas"].destroy();
    const chartData = drawnCharts.chartDatas["chartDialogCanvas"];
    update_chart(chartData);

    // draw_charts();
  });

  //サイドパネルの展開・折りたたみ処理
  $("#sideExpand").on("click", function (event) {
    var dispShowVW = "calc(100vw - 60px)";
    var dispHideVW = "60vw";
    if (window.innerWidth < breakpoint_width) {
      dispShowVW = "calc(100vw - 60px)";
      dispHideVW = "calc(100vw - 60px)";
    }

    if (event.target.icon == "chevrons-left") { //展開
      $("#sideExpand").attr("icon", "chevrons-right");
      $("#sideDiv").css('display', 'none');
      $("#displayDiv").css('width', dispShowVW);
    } else {  //折りたたみ
      $("#sideExpand").attr("icon", "chevrons-left");
      $("#sideDiv").css('display', 'block');
      $("#displayDiv").css('width', dispHideVW);
    }
    draw_charts();
  });


  function initForm() {
    var selector = document.getElementById("shihyoselector");

    var shihyo = config.shihyo;
    var group = null;
    var group_title = "";
    for (var i = 0; i < shihyo.length; i++) {
      var title = shihyo[i]["title"];
      var label = shihyo[i]["label"];
      var bunrui = shihyo[i]["bunrui"];

      if (bunrui != group_title) {
        var group = document.createElement("calcite-option-group");
        group.setAttribute('label', bunrui);
        group.innerHTML = bunrui;
        selector.appendChild(group);
        group_title = bunrui;
      }

      var option = document.createElement("calcite-option");
      option.setAttribute('value', title);
      option.innerHTML = label;

      if (i == 0) {
        option.setAttribute('selected', true);
      }
      group.appendChild(option);
    }

    $("#shihyoselector").val(config.shihyo[0].title);
  }

  async function setForm(init_flg) {

    var display = $('#displayselector').val();
    if (urlParameters.display) {
      $('#displayselector').val(urlParameters.display);
      display = urlParameters.display;
      urlParameters.display = null;
    }

    var shihyo = $('#shihyoselector').val();
    if (urlParameters.shihyo) {
      $('#shihyoselector').val(urlParameters.shihyo);
      shihyo = urlParameters.shihyo;
      urlParameters.shihyo = null;
    }
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;

    var kansho = $('#kanshoselector').val();
    if (urlParameters.kansho) {
      $('#kanshoselector').val(urlParameters.kansho);
      kansho = urlParameters.kansho;
      urlParameters.kansho = null;
    }

    var month = $('#monthselector').val();
    if (urlParameters.month) {
      $('#monthselector').val(urlParameters.month);
      month = urlParameters.month;
      urlParameters.month = null;
    }


    if (display == "graphview") {
      $("#mapviewDiv").hide();
      $("#graphviewDiv").show();
      $("#map_observatory").hide();
      $("#graph_observatory").show();
      $(".subObservatory").show();
      $('#yearselector-label').addClass('hidden');
      $('#yearselectorDiv').addClass('hidden');
    } else {
      $("#mapviewDiv").show();
      $("#graphviewDiv").hide();
      $("#map_observatory").show();
      $("#graph_observatory").hide();
      $(".subObservatory").hide();
      $('#yearselector-label').removeClass('hidden');
      $('#yearselectorDiv').removeClass('hidden');
    }

    if (bunrui == "年間値") {
      $('#monthselectorDiv').addClass('hidden');
    } else {
      $('#monthselectorDiv').removeClass('hidden');
    }

    //レイヤーの初期化
    var layers = map.allLayers.items;
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].type != "feature") {
        continue;
      }

      if (layers[i].title == (shihyo)) {
        shihyoLayer = layers[i];
        legend.layerInfos.layer = shihyoLayer;
        layers[i].visible = true;
      } else {
        layers[i].visible = false;
      }
    }

    let query = shihyoLayer.createQuery();

    var expression = "";
    if (kansho != "すべて") {
      expression = "官署 = '" + kansho + "'";
    }

    if (bunrui == "月別値") {
      if (expression != "") {
        expression = expression + " AND ";
      }
      expression = expression + "月 = " + month;
    }

    query.outFields = [
      "年"
    ];

    query.outStatistics = [
      {
        statisticType: "min",
        onStatisticField: "年",
        outStatisticFieldName: "最小年"
      },
      {
        statisticType: "max",
        onStatisticField: "年",
        outStatisticFieldName: "最大年"
      }
    ];
    query.returnGeometry = false;

    var response = await shihyoLayer.queryFeatures(query);
    var features = response.features;
    var min_year = features[0].attributes["最小年"];
    var max_year = features[0].attributes["最大年"];

    yearSlider.min = min_year;
    yearSlider.max = max_year;

    var year = yearSlider.values[0];
    if (urlParameters.year) {
      yearSlider.values[0] = urlParameters.year;
      setMapLayerFilter(false);
      year = Number(urlParameters.year);
      urlParameters.year = null;
    }

    //修正
    if (!init_flg) {
      return;
    }

    for (const graphElement of graphElements) {
      setPrefectureselector(graphElement, init_flg);
    }
  }

  async function setPrefectureselector(graphElement, init_flg) {

    const prefectureElement = graphElement.prefectureSecector;
    $(`#${prefectureElement} > calcite-option`).remove();
    const item = document.createElement("calcite-option");
    item.setAttribute("label", "全国");
    item.setAttribute("value", "全国");
    $(`#${prefectureElement}`).append(item);
    $(`#${prefectureElement}`).val("全国");

    for (var i = 0; i < config.prefecture.length; i++) {
      var area = config.prefecture[i];
      const item = document.createElement("calcite-option");
      item.setAttribute("label", area);
      item.setAttribute("value", area);
      $(`#${prefectureElement}`).append(item);
    }

    if (urlParameters[prefectureElement]) {
      $(`#${prefectureElement}`).val(urlParameters[prefectureElement]);
      urlParameters[prefectureElement] = null;
    }

    setObservatoryselector(graphElement, init_flg);
  }

  async function setObservatoryselector(graphElement, init_flg) {

    const prefectureElement = graphElement.prefectureSecector;
    const observatoryElement = graphElement.observatorySecector;

    var prefecture = $(`#${prefectureElement}`).val();
    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;
    var month = $('#monthselector').val();
    var kansho = $('#kanshoselector').val();

    let query = shihyoLayer.createQuery();

    var expression = "";
    if (kansho != "すべて") {
      expression = "官署 = '" + kansho + "'";
    }

    if (bunrui == "月別値") {
      if (expression == "") {
        expression = "月 = " + month;
      } else {
        expression = expression + " AND 月 = " + month;
      }
    }

    if (prefecture == "全国") {
      query.where = expression;
    } else {
      if (expression == "") {
        query.where = "都道府県= '" + prefecture + "'";
      } else {
        query.where = expression + " AND 都道府県= '" + prefecture + "'";
      }
    }

    query.outFields = [
      "都道府県", "地点番号", "観測地点名"
    ];
    query.orderByFields = "地点番号";
    query.groupByFieldsForStatistics = ["地点番号", "観測地点名"];

    query.outStatistics = [
      {
        statisticType: "min",
        onStatisticField: "都道府県",
        outStatisticFieldName: "都道府県リスト"
      },
      {
        statisticType: "min",
        onStatisticField: "観測地点名",
        outStatisticFieldName: "観測地点名リスト"
      }
    ];
    query.returnGeometry = false;

    $(`#${observatoryElement} > calcite-option`).remove();
    const item = document.createElement("calcite-option");
    item.setAttribute("label", "全て");
    item.setAttribute("value", "全て");
    $(`#${observatoryElement}`).append(item);
    $(`#${observatoryElement}`).val("全て");

    var response = await shihyoLayer.queryFeatures(query);
    var features = response.features;

    for (var i = 0; i < features.length; i++) {
      var area = features[i].attributes["観測地点名リスト"];
      const item = document.createElement("calcite-option");
      item.setAttribute("label", area);
      item.setAttribute("value", area);
      $(`#${observatoryElement}`).append(item);
    }

    if (urlParameters[observatoryElement]) {
      $(`#${observatoryElement}`).val(urlParameters[observatoryElement]);
      urlParameters[observatoryElement] = null;
    }
  }

  function setMapLayerFilter(zoom_flg) {
    //修正
    var prefecture = $('#prefectureselector1').val();
    var observatory = $('#observatoryselector1').val();
    var year = yearSlider.values[0];
    var month = $('#monthselector').val();
    var kansho = $('#kanshoselector').val();
    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;

    shihyoLayer.definitionExpression = "";

    var expression = "年 = " + String(year);

    if (bunrui == "月別値") {
      expression = expression + " AND 月 = " + month;
    }

    if (kansho != "すべて") {
      expression = expression + " AND 官署 = '" + kansho + "'";
    }

    if (prefecture != "全国" && observatory != "全て") {
      shihyoLayer.definitionExpression = expression + " AND 都道府県 = '" + prefecture + "' AND 観測地点名 = '" + observatory + "'";

      if (zoom_flg) {
        zoomToLayer();
      }
    } else if (observatory != "全て") {
      shihyoLayer.definitionExpression = expression + " AND 観測地点名 = '" + observatory + "'";

      if (zoom_flg) {
        zoomToLayer();
      }
    } else if (prefecture != "全国") {
      shihyoLayer.definitionExpression = expression + " AND 都道府県 = '" + prefecture + "'";
      if (zoom_flg) {
        zoomToLayer();
      }
    } else {
      shihyoLayer.definitionExpression = expression;
      if (zoom_flg) {
        view.extent = default_extend;
      }
    }


    function zoomToLayer() {
      let opts = {
        duration: 2000
      };
      return shihyoLayer.queryExtent().then(function (response) {
        view.goTo(response.extent.clone().expand(1.2), opts)
          .catch(function (error) {
            if (error.name != "AbortError") {
              console.error(error);
            }
          });
      });
    }
  }

  //グラフの再描画
  async function draw_charts() {

    if (shihyoLayer == null) {
      return;
    }

    //初期化
    for (const chart in drawnCharts.chartElements) {
      if (drawnCharts.chartElements[chart] != null) {
        drawnCharts.chartElements[chart].destroy();
      }
    }
    drawnCharts = {
      minYear: 9999,
      maxYear: 0,
      minValue: 9999,
      maxValue: 0,
      chartElements: {},
      chartDatas: {}
    }

    //各グラフの値を取得
    var datas = [];
    for (const graphElement of graphElements) {

      var chartData = await queryChartData(graphElement);
      if (chartData == null || chartData.labels.length == 0) {
        continue;
      }

      //グラフの年表示範囲を取得
      if (Number(chartData.labels[0]) < drawnCharts.minYear) {
        drawnCharts.minYear = Number(chartData.labels[0]);
      }
      if (Number(chartData.labels[chartData.labels.length - 1]) > drawnCharts.maxYear) {
        drawnCharts.maxYear = Number(chartData.labels[chartData.labels.length - 1]);
      }
      //グラフの値表示範囲を取得
      let values = chartData.datas.filter(value => value != null);
      if (Math.min(...values) < drawnCharts.minValue) {
        drawnCharts.minValue = Math.min(...values);
      }
      if (Math.max(...values) > drawnCharts.maxValue) {
        drawnCharts.maxValue = Math.max(...values);
      }

      datas.push(chartData);
    }

    for (const data of datas) {
      //最小の年までラベル、値を挿入
      if (Number(data.labels[0]) > drawnCharts.minYear) {
        var fill_year = Number(data.labels[0]) - 1;
        while (fill_year != drawnCharts.minYear) {
          data.labels.unshift(fill_year);
          data.datas.unshift(null);
          data.nulls.unshift(null);
          data.trendValiable.values.unshift({
            year: fill_year,
            value: null
          });
          data.movingAverages.unshift({
            year: fill_year,
            value: null
          });
          fill_year--;
        }
      }
      //最大の年までラベル、値を挿入
      if (Number(data.labels[data.length - 1]) < drawnCharts.maxYear) {
        var fill_year = Number(data.labels[data.length - 1]) + 1;
        while (fill_year != drawnCharts.maxYear) {
          data.labels.push(fill_year);
          data.datas.push(null);
          data.nulls.push(null);
          data.trendValiable.values.push({
            year: fill_year,
            value: null
          });
          data.movingAverages.push({
            year: fill_year,
            value: null
          });
          fill_year++;
        }
      }

      //グラフの描画
      update_chart(data);
    }

  }

  //個別のグラフデータを取得
  async function queryChartData(graphElement) {

    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;
    var shihyotxt = $('#shihyoselector calcite-option:selected').text();
    var prefecture = $(`#${graphElement.prefectureSecector}`).val();
    var observatory = $(`#${graphElement.observatorySecector}`).val();

    var check = await check_graph_render(graphElement);
    if (check == false) {
      $(`#${graphElement.disableDiv}`).show();
      $(`#${graphElement.canvas}`).hide();
      $(`#${graphElement.expand}`).hide();
      return null;
    } else {
      $(`#${graphElement.disableDiv}`).hide();
      $(`#${graphElement.canvas}`).show();
      $(`#${graphElement.expand}`).show();
    }

    var month = $('#monthselector').val();
    var monthtxt = $('#monthselector calcite-option:selected').text();

    var kansho = $('#kanshoselector').val();
    var field = config.shihyo.find(v => v.title === shihyo).field;

    //グラフ作成
    let query = shihyoLayer.createQuery();
    query.outFields = [
      "年", field
    ];
    query.orderByFields = "年";
    query.groupByFieldsForStatistics = "年";

    var chart_title = observatory + "観測所";
    chart_title = chart_title + "　" + shihyotxt;

    var expression = field + " <> " + String(32767);
    if (kansho != "すべて") {
      expression = expression + " AND 官署 = '" + kansho + "'"
    }
    if (bunrui == "月別値") {
      chart_title = chart_title + "　" + monthtxt;
      expression = expression + " AND 月 = " + month;
    }

    if (prefecture != "全国") {
      expression = expression + " AND 都道府県 = '" + prefecture + "'";
    }

    query.where = expression + " AND 観測地点名 = '" + observatory + "'";
    query.returnGeometry = false;

    var response = await shihyoLayer.queryFeatures(query);
    var features = response.features;

    var datasets = [];
    var labels = [];
    var datas = [];
    var nulls = [];

    var before_year = "";
    for (var i = 0; i < features.length; i++) {
      var year = features[i].attributes["年"];
      var value = features[i].attributes[field];

      //年の開始は5の倍数
      if (i == 0) {
        var fill_year = Math.floor(year / 5) * 5;
        while (fill_year != year) {
          labels.push(fill_year);
          datas.push(null);
          nulls.push(null);
          datasets.push({
            type: "blank",
            year: fill_year,
            value: null
          });
          fill_year++;
        }
        before_year = year - 1;
      }

      //データ欠落年はnullをセット
      while ((before_year + 1) < year) {
        before_year++;
        labels.push(before_year);
        datas.push(null);
        nulls.push(0);

        datasets.push({
          type: "nodata",
          year: before_year,
          value: null
        });
      }

      labels.push(year);
      datas.push(Math.round(value * 100) / 100);
      nulls.push(null);

      datasets.push({
        type: "normal",
        year: year,
        value: Math.round(value * 100) / 100
      });

      before_year = year;
    }

    //統計トレンド曲線
    const trendValiable = getTrendVariable(datasets);

    //中央移動平均
    const movingAverages = getMovingAverage(datasets)

    return {
      canvas: graphElement.canvas,
      title: chart_title,
      labels: labels,
      datas: datas,
      nulls: nulls,
      datasets: datasets,
      trendValiable: trendValiable,
      movingAverages: movingAverages
    }
  }

  //トレンドを求める
  function getTrendVariable(datasets) {

    let valuebles = datasets.filter((n) => n.type === "normal");

    const len = valuebles.length;
    const sigX = valuebles.reduce((acc, c) => acc + c.year, 0);
    const sigY = valuebles.reduce((acc, c) => acc + c.value, 0);
    const sigXX = valuebles.reduce((acc, c) => acc + c.year * c.year, 0);
    const sigXY = valuebles.reduce((acc, c) => acc + c.year * c.value, 0);
    // a(傾き)を求める
    const a = (len * sigXY - sigX * sigY) / (len * sigXX - Math.pow(sigX, 2));
    // b(切片)を求める
    const b = (sigXX * sigY - sigXY * sigX) / (len * sigXX - Math.pow(sigX, 2));

    let values = [];
    for (const dataset of datasets) {
      if (dataset.year == valuebles[0].year) {
        values.push({
          year: dataset.year,
          value: valuebles[0].year * a + b
        });
      } else if (dataset.year == valuebles[len - 1].year) {
        values.push({
          year: dataset.year,
          value: valuebles[len - 1].year * a + b
        });
      } else {
        values.push({
          year: dataset.year,
          value: null
        });
      }
    }

    const trendValiable = {
      a: Math.floor(a * 1000) / 1000,
      b: Math.floor(b * 1000) / 1000,
      r: Math.floor(a * 100 * 100) / 100,
      values: values
    }
    return trendValiable;
  }

  //移動平均を求める
  function getMovingAverage(datasets) {
    const beforeOffset = config.chart_setting.average.beforeOffset;
    const afterOffset = config.chart_setting.average.afterOffset;
    const len = datasets.length;
    const valuebles = datasets.filter(n => n.type != "blank");

    if (valuebles.length == 0) {
      return [];
    }

    let calcStartYear = valuebles[0].year + beforeOffset;
    if (calcStartYear > valuebles[valuebles.length - 1].year) {
      calcStartYear = valuebles[valuebles.length - 1].year;
    }

    let calcEndYear = valuebles[valuebles.length - 1].year - afterOffset;
    if (calcEndYear < valuebles[0].year) {
      calcEndYear = valuebles[0].year;
    }
    if (calcStartYear == calcEndYear) {
      return [];
    }

    let movingAverages = [];
    for (let i = 0; i < len; i++) {
      const currentYear = datasets[i].year;
      if (currentYear < calcStartYear || currentYear > calcEndYear) {
        movingAverages.push({
          year: currentYear,
          value: null
        });
      } else {
        const startYear = currentYear - beforeOffset;
        const endYear = currentYear + afterOffset;

        let count = 0;
        let total = 0;
        for (let j = startYear; j <= endYear; j++) {
          const currentValue = datasets.find(n => n.year === j).value;
          if (currentValue === null) continue;
          count += 1;
          total += currentValue;
        }
        if (count === 0) {
          movingAverages.push({
            year: currentYear,
            value: null
          });
        } else {
          let average = Math.floor((total / count) * 100) / 100;
          movingAverages.push({
            year: currentYear,
            value: average
          });
        }
      }
    }
    return movingAverages;
  }


  //グラフの描画
  function update_chart(chartData) {

    const element = chartData.canvas;
    const chart_title = chartData.title;
    const labels = chartData.labels;
    const datas = chartData.datas;
    var nulls = chartData.nulls;
    let movingAverages = chartData.movingAverages.map(n => n.value);
    let trendValues = chartData.trendValiable.values.map(n => n.value);
    const rTrend = chartData.trendValiable.r;

    var ctx = document.getElementById(element).getContext('2d');

    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;
    var shihyotxt = $('#shihyoselector calcite-option:selected').text();
    // var prefecture = $('#prefectureselector').val();
    // var observatory = $('#observatoryselector').val();
    var month = $('#monthselector').val();

    var chart_type = config["shihyo"].find(value => value.title == shihyo).chart;
    var borderColor = config["shihyo"].find(value => value.title == shihyo).borderColor;
    var backgroundColor = config["shihyo"].find(value => value.title == shihyo).backgroundColor;
    var yAxesStep = config["shihyo"].find(value => value.title == shihyo).yAxesStep;

    var title_fontSize = 24;
    var scales_fontSize = 16;

    if (window.innerWidth < breakpoint_width) {
      title_fontSize = 12;
      scales_fontSize = 9;
    }

    var yLabel = shihyotxt;

    //最小値と最大値からY軸の範囲を設定
    var yAxesMin = Math.floor(drawnCharts.minValue / yAxesStep) * yAxesStep;
    if (chart_type == "bar") {
      yAxesMin = 0;
    }
    var yAxesMax = Math.ceil(drawnCharts.maxValue / yAxesStep) * yAxesStep;
    if (yAxesMin == yAxesMax) {
      yAxesMax = yAxesMax + yAxesStep;
    }

    //欠測値のY軸表示高さ
    nulls = nulls.map(value => {
      if (value == null) {
        return null;
      } else {
        return yAxesMin;
      }
    });

    var datasets = [];

    //トレンドデータのグラフ
    datasets.push({
      label: config.chart_setting.trend.label + "(R=" + rTrend + ")",
      type: "line",
      data: trendValues,
      borderColor: config.chart_setting.trend.borderColor,
      backgroundColor: config.chart_setting.trend.borderColor,
      lineTension: 0,
      borderWidth: 2,
      pointStyle: 'rect',
      pointRadius: 0,
      spanGaps: true,
      fill: false
    });

    //移動平均のグラフ
    datasets.push({
      label: config.chart_setting.average.label,
      type: "line",
      data: movingAverages,
      borderColor: config.chart_setting.average.borderColor,
      backgroundColor: config.chart_setting.average.borderColor,
      lineTension: 0.4,
      borderWidth: 2,
      pointStyle: 'rect',
      pointRadius: 0,
      spanGaps: true,
      fill: false
    });

    //通常データのグラフ
    datasets.push({
      label: shihyotxt,
      type: chart_type,
      data: datas,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      lineTension: 0,
      pointStyle: 'circle',
      borderWidth: 0.5,
      radius: 3,
      spanGaps: true,
      fill: false
    });

    //欠測値のグラフ
    if (nulls.filter(n => n != null).length > 0) {
      datasets.push({
        label: config.chart_setting.nodata.label,
        type: "line",
        data: nulls,
        pointBorderColor: config.chart_setting.nodata.pointBorderColor,
        pointBackgroundColor: config.chart_setting.nodata.pointBorderColor,
        borderColor: config.chart_setting.nodata.pointBorderColor,
        pointStyle: 'crossRot',
        showLine: false,
        spanGaps: true,
        pointRadius: 10,
        pointHoverRadius: 15
      });
    }

    drawnCharts.chartDatas[element] = chartData;

    drawnCharts.chartElements[element] = new Chart(ctx, {
      type: chart_type,
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        title: {
          display: true,
          fontSize: title_fontSize,
          fontColor: '#000000',
          text: chart_title
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0
          }
        },
        legend: {
          display: true,
          position: 'right',
          labels: {
            fontColor: '#000000',
            boxWidth: 20,
            usePointStyle: true,
            padding: 10
          }
        },
        tooltips: {
          // mode: 'nearest',
          titleFontSize: 14,
          bodyFontSize: 14,
          callbacks: {
            title: function (tooltipItem, data) {
              return shihyotxt;
            },
            label: function (tooltipItem, data) {
              if (data.datasets[tooltipItem.datasetIndex].label === "欠測値") {
                return data.labels[tooltipItem.index] + "年：欠測値";
              } else {
                return data.labels[tooltipItem.index] + "年" + "：" + tooltipItem.yLabel;
              }
            }
          }
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: '観測年',
              fontSize: scales_fontSize,
              fontColor: '#000000'
            },
            gridLines: {
              display: false
            },
            ticks: {
              min: drawnCharts.minYear,
              max: drawnCharts.maxYear,
              autoSkip: false,
              fontColor: '#000000',
              callback: function (value, index, values) {
                if (value % 5 == 0) {
                  return value + "年";
                } else {
                  return "";
                }
              }
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: yLabel,
              fontSize: scales_fontSize,
              fontColor: '#000000',
              stepSize: yAxesStep,
            },
            ticks: {
              min: yAxesMin,
              max: yAxesMax,
              fontColor: '#000000',
              stepSize: yAxesStep,
              userCallback: function (label, index, labels) {
                if (Math.floor(label) === label) {
                  return label;
                }
              }
            }
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  //選択された観測所でグラフを描画できるかチェック
  async function check_graph_render(graphElement) {
    var prefecture = $(`#${graphElement.prefectureSecector}`).val();
    var observatory = $(`#${graphElement.observatorySecector}`).val();
    var kansho = $('#kanshoselector').val();

    var result = false;
    if (shihyoLayer == null) {
      return result;
    }
    if (observatory == "全て") {
      return result;
    }

    var query = shihyoLayer.createQuery();
    var expression = "観測地点名 = '" + observatory + "'";

    if (kansho != "すべて") {
      expression = expression + " AND 官署 = '" + kansho + "'";
    }

    if (prefecture != "全国") {
      expression = expression + " AND 都道府県 = '" + prefecture + "'";
    }
    query.where = expression;
    query.outFields = ["地点番号"];
    query.groupByFieldsForStatistics = "地点番号";
    query.returnDistinctValues = true;
    query.returnGeometry = false;

    var response = await shihyoLayer.queryFeatures(query);
    var features = response.features;
    if (features.length == 1) {
      result = true;
    }

    return result;
  }

  function download_csv(flg) {
    //修正
    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;
    var shihyotxt = $('#shihyoselector calcite-option:selected').text();
    var prefecture = $('#prefectureselector1').val();
    var observatory = $('#observatoryselector1').val();
    var year = yearSlider.values[0];
    var month = $('#monthselector').val();
    var kansho = $('#kanshoselector').val();
    var field = config.shihyo.find(v => v.title === shihyo).field;

    var fields = ["地点番号", "都道府県", "観測地点名", "緯度", "経度", "年", field];
    if (bunrui == "月別値") {
      fields = ["地点番号", "都道府県", "観測地点名", "緯度", "経度", "年", "月", field];
    }

    var query = shihyoLayer.createQuery();

    if (flg == 0) {
      if (prefecture != "全国" && observatory != "全て") {
        if (kansho != "すべて") {
          query.where = "官署 = '" + kansho + "' AND 都道府県 = '" + prefecture + "' AND 観測地点名 = '" + observatory + "'";
        } else {
          query.where = "都道府県 = '" + prefecture + "' AND 観測地点名 = '" + observatory + "'";
        }
        shihyotxt = shihyotxt + "_" + observatory;
      } else if (observatory != "全て") {
        if (kansho != "すべて") {
          query.where = "官署 = '" + kansho + "' AND 観測地点名 = '" + observatory + "'";
        } else {
          query.where = "観測地点名 = '" + observatory + "'";
        }
        shihyotxt = shihyotxt + "_" + observatory;
      } else if (prefecture != "全国") {
        if (kansho != "すべて") {
          query.where = "官署 = '" + kansho + "' AND 都道府県 = '" + prefecture + "'";
        } else {
          query.where = "都道府県 = '" + prefecture + "'";
        }
        shihyotxt = shihyotxt + "_" + prefecture;
      } else {
        if (kansho != "すべて") {
          query.where = "官署 = '" + kansho + "'";
        }
        shihyotxt = shihyotxt + "_全国";
      }
    } else {
      query.geometry = view.extent;
      shihyotxt = shihyotxt + "_マップ範囲のみ";
    }

    query.outFields = fields;

    query.orderByFields = "地点番号,年";
    if (bunrui == "月別値") {
      query.orderByFields = "地点番号,年,月";
    }

    query.returnGeometry = false;
    query.maxRecordCountFactor = 10;

    var records = [];

    shihyoLayer.queryFeatures(query)
      .then(function (response) {
        var features = response.features;

        for (let i = 0; i < features.length; ++i) {
          var att = features[i].attributes;

          var record = [];
          for (let j = 0; j < fields.length; ++j) {
            record.push(att[fields[j]]);
          }
          records.push(record);
        }

        startCsvDownload(shihyotxt, fields, records);
      });


    //CSVデータの保存
    function startCsvDownload(shihyo, fields, records) {
      const filename = kansho + "_" + shihyo + '.csv';

      var csv_text = fields.join(',') + "\r\n";

      for (let i = 0; i < records.length; ++i) {
        for (let j = 0; j < records[i].length; ++j) {
          csv_text = csv_text + records[i][j] + ",";
        }
        csv_text = csv_text + "\r\n";
      }

      const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
      const blob = new Blob([bom, csv_text], { type: 'text/csv' });

      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, filename);
      } else {
        const url = (window.URL || window.webkitURL).createObjectURL(blob);
        const download = document.createElement('a');
        download.href = url;
        download.download = filename;
        download.click();
        (window.URL || window.webkitURL).revokeObjectURL(url);
      }
    }
  }

  //マップ画像の保存
  async function startMapDownload() {
    //修正
    var prefecture = $('#prefectureselector1').val();
    var observatory = $('#observatoryselector1').val();
    var year = yearSlider.values[0];
    var month = $('#monthselector').val();
    var kansho = $('#kanshoselector').val();
    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;
    var shihyotxt = $('#shihyoselector calcite-option:selected').text();
    var titleHeight = 60;

    var mapScreenshot = await view.takeScreenshot();
    var mapImg = new Image();
    mapImg.src = mapScreenshot.dataUrl;
    await mapImg.onload;
    var legendImgUrl = await domtoimage.toPng($(".esri-legend")[0]);
    const legendImg = new Image();
    legendImg.src = legendImgUrl;
    await legendImg.onload;

    var export_canvas = document.getElementById('export_canvas');
    export_canvas.width = mapImg.width;
    export_canvas.height = mapImg.height + 60;
    const ctx = export_canvas.getContext("2d");


    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, export_canvas.width, export_canvas.height);

    var legendDw = 150;
    var legendDh = 200;
    var legendDx = export_canvas.width - legendDw - 2;
    var legendDy = export_canvas.height - legendDh - 2;

    ctx.drawImage(mapImg, 0, 0, mapImg.width, mapImg.height, 0, titleHeight, mapImg.width, mapImg.height);
    ctx.drawImage(legendImg, 0, 0, legendImg.width, legendImg.height, legendDx, legendDy, legendDw, legendDh);

    var export_text = shihyotxt + "_";
    if (bunrui == "年間値") {
      export_text += year + "年";
    } else {
      export_text += year + "年" + month + "月";
    }
    export_text += "_分布";

    ctx.fillStyle = "black";
    ctx.font = "24px serif";

    if (window.innerWidth < breakpoint_width) {
      ctx.font = "12px serif";
    }

    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(export_text, 10, 10);

    var a = document.createElement('a');
    a.href = export_canvas.toDataURL();
    a.download = export_text + '.png';
    a.click();
  }

  //グラフ画像の保存
  // function startGraphDownload(title, canvasElement) {
  //   var shihyotxt = $('#shihyoselector calcite-option:selected').text();
  //   var observatory = $('#observatoryselector1').val();

  //   if (observatory == "全て") {
  //     alert("観測所が選択されていません");
  //     return;
  //   }

  //   var export_text = observatory + "観測所_";
  //   export_text += shihyotxt;
  //   export_text += "_グラフ";

  //   var ctx = document.getElementById(canvasElement);
  //   var a = document.createElement('a');
  //   a.href = ctx.toDataURL();
  //   a.download = export_text + '.png';
  //   a.click();
  // }
});

//URLパラメータの取得
function getParam(name) {
  var url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}