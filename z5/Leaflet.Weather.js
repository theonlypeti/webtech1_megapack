//som pozdvihol a poprefixoval nefunkcny abandoned project od https://github.com/oskosk
//original repo: https://github.com/oskosk/Leaflet.Weather

L.Control.Weather = L.Control.extend({
  options: {
    position: "bottomleft",
    units: "internal",
    lang: "en",
    event: "moveend",
    cssClass: "leaflet-control-weather",
    iconUrlTemplate: "https://openweathermap.org/img/w/:icon",
    template: '<div class="weatherIcon"><img src=":iconurl"></div><div>Teplota: :temperature°C</div><div>Vlhkosť: :humidity%</div><div>Vietor: :winddirection :windspeed km/h</div>',
    translateWindDirection: function(text) {
      return text;
    },
    updateWidget: undefined
  },
  onAdd: function(map) {
    this._div = L.DomUtil.create('div', this.options.cssClass);
    this.onMoveEnd = onMoveEnd.bind(this);
    if (!this.options.updateWidget) {
      this.options.updateWidget = this._updateWidget.bind(this);
    }
    this.refresh(this.options.updateWidget.bind(this));
    this._map.on(this.options.event, this.onMoveEnd);

    function onMoveEnd() {
      var _this = this;
      this.refresh(function(weather) {
        _this.options.updateWidget(weather);
      });
    }
    return this._div;
  },
  onRemove: function(map) {
    this._map.off(this.options.event, this.onMoveEnd);
  },
  refresh: function(callback) {
    var _this = this,
      center = this._map.getCenter(),
      url = "https://api.openweathermap.org/data/2.5/weather?lat=:lat&lon=:lng&lang=:lang&units=:units&appid=TOKEN\n";
    url = url.replace(":lang", this.options.lang);
    url = url.replace(":units", "metric");
    url = url.replace(":lat", center.lat);
    url = url.replace(":lng", center.lng);
    $.getJSON(url, function(weather) {
      callback(weather);
    });
  },
  _updateWidget: function(weather) {
    var iconUrl = this.options.iconUrlTemplate.replace(":icon", weather.weather[0].icon + ".png");
    var tpl = this.options.template;
    tpl = tpl.replace(":iconurl", iconUrl);
    tpl = tpl.replace(":temperature", weather.main.temp);
    tpl = tpl.replace(":humidity", weather.main.humidity);
    tpl = tpl.replace(":windspeed",  parseFloat((weather.wind.speed*3.6).toFixed(4)));
    tpl = tpl.replace(":winddirection", this.mapWindDirection(weather.wind.deg));
    tpl = tpl.replace(":windegrees", weather.wind.deg);
    $(this._div).html(tpl);
  },
  /**
   * Maps from wind direction in degrees to cardinal points
   * According to :
   * http://climate.umn.edu/snow_fence/components/winddirectionanddegreeswithouttable3.htm
   */
  mapWindDirection: function(degrees) {
    var text = "";
    if (inRange(degrees, 11.25, 33.75)) {
      text = "SSV";
    } else if (inRange(degrees, 33.75, 56.25)) {
      text = "SV";
    } else if (inRange(degrees, 56.25, 78.75)) {
      text = "VSV";
    } else if (inRange(degrees, 78.75, 101.25)) {
      text = "V";
    } else if (inRange(degrees, 101.25, 123.75)) {
      text = "VJV";
    } else if (inRange(degrees, 123.75, 146.25)) {
      text = "JV";
    } else if (inRange(degrees, 146.25, 168.75)) {
      text = "JJV";
    } else if (inRange(degrees, 168.75, 191.25)) {
      text = "J";
    } else if (inRange(degrees, 191.25, 213.75)) {
      text = "JJZ";
    } else if (inRange(degrees, 213.75, 236.25)) {
      text = "JZ";
    } else if (inRange(degrees, 236.25, 258.75)) {
      text = "ZJZ";
    } else if (inRange(degrees, 258.75, 281.25)) {
      text = "Z";
    } else if (inRange(degrees, 281.25, 303.75)) {
      text = "ZSZ";
    } else if (inRange(degrees, 303.75, 326.25)) {
      text = "ZS";
    } else if (inRange(degrees, 326.25, 348.75)) {
      text = "SSZ";
    } else if (inRange(degrees, 348.75, 11.25)) {
      text = "S";
    }
    return this.options.translateWindDirection(text);

    function inRange(val, min, max) {
      // Special case for north like comparation
      if (max < min) {
        if (val >= min && val < 360) {
          return true;
        }
        return val > 0 && val < max;

      }
      // Al other directions
      return val >= min && val <= max;

    }
  }
});

L.control.weather = function(options) {
  return new L.Control.Weather(options);
};
