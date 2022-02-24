import { defineComponent, openBlock, createElementBlock } from 'vue';

function addScript(src, id) {
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
}

var script$1 = /*#__PURE__*/defineComponent({
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
    setVariables() {
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

    checkScript() {
      if (document.getElementById('ht-embed-script')) {
        removeScript('ht-embed-script');
      }

      addScript('//talk.hyvor.com/web-api/embed', 'ht-embed-script');
    }

  },

  mounted() {
    this.setVariables();
    this.checkScript();
  }

});

const _hoisted_1$1 = {
  id: "hyvor-talk-view"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1);
}

script$1.render = render$1;

var script = /*#__PURE__*/defineComponent({
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
    setVariables() {
      if (this.websiteId) {
        window.HYVOR_TALK_WEBSITE = this.websiteId;
      }
    }

  },

  mounted() {
    this.setVariables();
    var scriptId = 'ht-comment-count-script';

    if (document.getElementById(scriptId)) {
      removeScript(scriptId);
    }

    addScript('//talk.hyvor.com/web-api/count/', scriptId);
  }

});

const _hoisted_1 = ["data-talk-id", "mode"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    "data-talk-id": _ctx.id,
    mode: _ctx.mode
  }, null, 8, _hoisted_1);
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Embed: script$1,
  CommentCount: script
});

// Import vue components

const install = function installHyvorTalkVue(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { script as CommentCount, script$1 as Embed, install as default };
