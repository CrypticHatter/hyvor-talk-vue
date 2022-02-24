'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}function addScript(src, id) {
  var script = document.createElement('script');
  script.src = src;
  script.id = id;
  document.body.appendChild(script);
}
function removeScript(id) {
  var script = document.getElementById(id);

  if (id) {
    script.parentElement.removeChild(script);
  }
}var script$1 = /*#__PURE__*/vue.defineComponent({
  name: 'Embed',
  // vue component name
  props: {
    websiteId: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: false
    },
    id: {
      type: String,
      default: false
    },
    title: {
      type: String,
      default: window.document.title
    },
    loadMode: {
      type: String,
      default: 'default'
    },
    language: {
      type: String,
      default: null
    },
    sso: {
      type: String,
      default: null
    },
    palette: {
      type: Object,
      default: null
    },
    authorEmail: {
      type: String,
      default: null
    }
  },
  methods: {
    setVariables: function setVariables() {
      window.HYVOR_TALK_WEBSITE = this.websiteId, window.HYVOR_TALK_CONFIG = {
        url: this.url,
        id: this.id,
        title: this.title,
        loadMode: this.loadMode,
        language: this.language,
        sso: this.sso,
        palette: this.palette,
        authorEmail: this.authorEmail
      };
    },
    checkScript: function checkScript() {
      if (document.getElementById('ht-embed-script')) {
        removeScript('ht-embed-script');
      }

      addScript('//talk.hyvor.com/web-api/embed', 'ht-embed-script');
    }
  },
  mounted: function mounted() {
    this.setVariables();
    this.checkScript();
  }
});var _hoisted_1$1 = {
  id: "hyvor-talk-view"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1);
}script$1.render = render$1;var script = /*#__PURE__*/vue.defineComponent({
  name: 'CommentCount',
  // vue component name
  props: {
    websiteId: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      default: 'default'
    },
    id: {
      type: String,
      default: null
    }
  },
  methods: {
    setVariables: function setVariables() {
      if (this.websiteId) {
        window.HYVOR_TALK_WEBSITE = this.websiteId;
      }
    }
  },
  mounted: function mounted() {
    this.setVariables();
    var scriptId = 'ht-comment-count-script';

    if (document.getElementById(scriptId)) {
      removeScript(scriptId);
    }

    addScript('//talk.hyvor.com/web-api/count/', scriptId);
  }
});var _hoisted_1 = ["data-talk-id", "mode"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("span", {
    "data-talk-id": _ctx.id,
    mode: _ctx.mode
  }, null, 8, _hoisted_1);
}script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,Embed:script$1,CommentCount:script});var install = function installHyvorTalkVue(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,Embed:script$1,CommentCount:script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;