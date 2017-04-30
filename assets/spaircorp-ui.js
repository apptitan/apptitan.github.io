"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('spaircorp-ui/app', ['exports', 'ember', 'spaircorp-ui/resolver', 'ember-load-initializers', 'spaircorp-ui/config/environment'], function (exports, _ember, _spaircorpUiResolver, _emberLoadInitializers, _spaircorpUiConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _spaircorpUiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _spaircorpUiConfigEnvironment['default'].podModulePrefix,
    Resolver: _spaircorpUiResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _spaircorpUiConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("spaircorp-ui/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _liquidFireComponentsLfGetOutletState) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfGetOutletState["default"];
    }
  });
});
define('spaircorp-ui/components/async-button', ['exports', 'ember-async-button/components/async-button'], function (exports, _emberAsyncButtonComponentsAsyncButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAsyncButtonComponentsAsyncButton['default'];
    }
  });
});
define('spaircorp-ui/components/config-input-control', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    controlTypeOptions: ['Textbox', 'Textarea', 'Currency', 'Date', 'Number']

  });
});
define('spaircorp-ui/components/config-options-control', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    controlTypeOptions: ['Checkbox', 'Radio', 'List'],

    options: _ember['default'].computed('control.options', function () {
      var options = this.get('control.options') || "";
      return options.split(',');
    })

  });
});
define("spaircorp-ui/components/content-backdrop", ["exports", "ember-side-menu/components/content-backdrop"], function (exports, _emberSideMenuComponentsContentBackdrop) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberSideMenuComponentsContentBackdrop["default"];
    }
  });
});
define('spaircorp-ui/components/content-editable', ['exports', 'ember-content-editable/components/content-editable'], function (exports, _emberContentEditableComponentsContentEditable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberContentEditableComponentsContentEditable['default'];
    }
  });
});
define('spaircorp-ui/components/draggable-object-target', ['exports', 'ember-drag-drop/components/draggable-object-target'], function (exports, _emberDragDropComponentsDraggableObjectTarget) {
  exports['default'] = _emberDragDropComponentsDraggableObjectTarget['default'];
});
define('spaircorp-ui/components/draggable-object', ['exports', 'ember-drag-drop/components/draggable-object'], function (exports, _emberDragDropComponentsDraggableObject) {
  exports['default'] = _emberDragDropComponentsDraggableObject['default'];
});
define('spaircorp-ui/components/ember-notify', ['exports', 'ember-notify/components/ember-notify'], function (exports, _emberNotifyComponentsEmberNotify) {
  exports['default'] = _emberNotifyComponentsEmberNotify['default'];
});
define('spaircorp-ui/components/ember-notify/message', ['exports', 'ember-notify/components/ember-notify/message'], function (exports, _emberNotifyComponentsEmberNotifyMessage) {
  exports['default'] = _emberNotifyComponentsEmberNotifyMessage['default'];
});
define("spaircorp-ui/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define('spaircorp-ui/components/jsplumb-miniview', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('spaircorp-ui/components/jsplumb-palette', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('spaircorp-ui/components/jsplumb-toolkit', ['exports', 'ember'], function (exports, _ember) {

  // This function is what the toolkit will use to get an ID from a node.
  var idFunction = function idFunction(n) {
    return n.id;
  };

  // This function is what the toolkit will use to get the associated type from a node.
  var typeFunction = function typeFunction(n) {
    return n.type;
  };

  var EMPTY_FUNCTION = function EMPTY_FUNCTION() {};

  /**
   * @param data - object
   *
   */
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['jsplumb-toolkit'],

    // didRender() {
    //   const toolkit = this.get('toolkit');
    //   if (toolkit) {
    //     debugger;
    //   }
    // },

    didInsertElement: function didInsertElement() {
      var _this = this;

      var self = this;

      jsPlumbToolkit.ready(function () {
        // ------------------------ toolkit setup ------------------------------------

        // get the various dom elements
        var canvasElement = _this.$(".jtk-canvas");
        var miniviewElement = _this.$(".miniview");
        var nodePalette = _this.$(".node-palette");
        var controls = _this.$(".controls");

        // Declare an instance of the Toolkit, and supply the functions we will use to get ids and types from nodes.
        var toolkit = jsPlumbToolkit.newInstance({
          idFunction: idFunction,
          typeFunction: typeFunction,
          nodeFactory: function nodeFactory(type, data, _callback) {
            var isStartNode = type === 'start';
            var isFinishNode = type === 'finish';

            // Rule: Can only insert a single start node
            if (isStartNode) {
              var startNodes = toolkit.filter(function (obj) {
                return obj.objectType === "Node" && obj.getType() == 'start';
              });
              if (startNodes.getAll().length > 0) {
                bootbox.alert("You can only have a single start node per graph");
                return false;
              }
            }

            // FIXME DUPLICATE CODE ...
            // Rule: Can only insert a single finish node
            if (isFinishNode) {
              var finishNodes = toolkit.filter(function (obj) {
                return obj.objectType === "Node" && obj.getType() == 'finish';
              });
              if (finishNodes.getAll().length > 0) {
                bootbox.alert("You can only have a single finish node per graph");
                return false;
              }
            }

            var canNameNode = !isStartNode && !isFinishNode;

            if (canNameNode) {
              bootbox.prompt({
                title: "Enter " + type + " name:",
                placeholder: 'Enter text here',
                callback: function callback(text) {
                  data.text = text;
                  // if the user entered a name...
                  if (data.text) {
                    // and it was at least 2 chars
                    if (data.text.length >= 2) {
                      // set an id and continue.
                      data.id = jsPlumbToolkitUtil.uuid();
                      _callback(data);
                    } else {
                      // else advise the user.
                      alert(type + " names must be at least 2 characters!");
                    }
                  }
                }
              });
            } else {
              data.id = jsPlumbToolkitUtil.uuid();
              data.text = type.toUpperCase();
              _callback(data);
            }
          },
          beforeConnect: function beforeConnect(source, target, edgeData) {
            // Rule: Don't allow loopback
            if (source.data.id === target.data.id) {
              bootbox.alert("You can't connect a node to itself");
              return false;
            }

            // Rule: Don't allow an outgoing connection to then return as an incomming connection
            // if (source.data.id === source.data.id) {
            //   bootbox.alert("You can't connect a node to itself");
            //   return false;
            // }

            // Rule: can't connect a start node to a decision node
            if (source.getType() === 'start' && target.getType() === 'decision') {
              bootbox.alert("You can't attatch a start node to a decision node");
              return false;
            }

            // Rule: can't connect a start node to a finish node
            if (source.getType() === 'start' && target.getType() === 'finish') {
              bootbox.alert("You can't attatch a start node to a finish node");
              return false;
            }

            return true;
          },
          beforeStartConnect: function beforeStartConnect(source, edgeType) {

            // Rule: start only allowed 1 exit
            if (source.data.type === "start" && source.getEdges().length > 0) {
              return false;
            }

            // Rule: processes only allowed multiple entry and 1 exit
            if (source.data.type === "process" && source.getSourceEdges().length > 0) {
              return false;
            }

            return { label: "" };
          },
          beforeMoveConnection: function beforeMoveConnection(source, target, edge) {
            return true;
          },
          beforeDetach: function beforeDetach(source, target, edge) {
            return true;
          },
          beforeStartDetach: function beforeStartDetach(source, target, edge) {
            return true;
          },
          // Saving
          autoSave: true,
          saveUrl: _this.attrs['save-url'], //"/scripts/2/diagram"
          onAutoSaveSuccess: function onAutoSaveSuccess(response) {
            debugger;
            _ember['default'].debug('Saved Successfully!');
          },
          onAutoSaveError: function onAutoSaveError(msg) {
            _ember['default'].debug('Saving script has failed!');
            alert('Save Failed!');
          },
          onAutoSaveSuccess: function onAutoSaveSuccess(response) {
            _ember['default'].debug('Saved Successfully!');
          },
          onBeforeAutoSave: function onBeforeAutoSave() {
            _ember['default'].debug('Pre Save!');
          },
          onAfterAutoSave: function onAfterAutoSave() {
            _ember['default'].debug('Post Save!');
          }
        });

        _this.set('toolkit', toolkit);

        // ------------------------ / toolkit setup ------------------------------------

        // ------------------------ rendering ------------------------------------

        var _editLabel = function _editLabel(edge, deleteOnCancel) {

          // TODO create action
          bootbox.prompt({
            title: "Enter Text:",
            value: edge.data.label || "",
            placeholder: 'Enter text here',
            callback: function callback(text) {
              if (text == null) {
                if (deleteOnCancel) {
                  toolkit.removeEdge(edge);
                }
              } else {
                toolkit.updateEdge(edge, { label: text || "" });
              }
            }
          });
        };

        // Instruct the toolkit to render to the 'canvas' element. We pass in a view of nodes, edges and ports, which
        // together define the look and feel and behaviour of this renderer.  Note that we can have 0 - N renderers
        // assigned to one instance of the Toolkit..
        var renderer = window.renderer = toolkit.render({
          container: canvasElement,
          templates: {
            tmplStart: '\n              <div style="left:${left}px;top:${top}px;width:${w}px;height:${h}px;" class="flowchart-object flowchart-start">\n                <div style="position:relative">\n                  <svg:svg width="${w}" height="${h}">\n                    <svg:ellipse cx="${w/2}" cy="${h/2}" rx="${w/2}" ry="${h/2}" class="outer"/>\n                    <svg:ellipse cx="${w/2}" cy="${h/2}" rx="${(w/2) - 10}" ry="${(h/2) - 10}" class="inner"/>\n                    <svg:text text-anchor="middle" x="${ w / 2 }" y="${ h / 2 }" dominant-baseline="central">${text}</svg:text>\n                  </svg:svg>\n                </div>\n                <jtk-source port-type="start" filter=".outer" filter-negate="true"/>\n              </div>\n            ',
            tmplDecision: '\n              <div style="left:${left}px;top:${top}px;width:${w}px;height:${h}px;" class="flowchart-object flowchart-decision">\n                <div style="position:relative">\n                  <div class="node-edit node-action">\n                    <i class="fa fa-2x fa-pencil-square-o"/>\n                  </div>\n                  <div class="node-delete node-action">\n                    <i class="fa fa-2x fa-times"/>\n                  </div>\n                  <svg:svg width="${w}" height="${h}">\n                    <svg:path d="M ${w/2} 0 L ${w} ${h/2} L ${w/2} ${h} L 0 ${h/2} Z" class="outer"/>\n                    <svg:path d="M ${w/2} 10 L ${w-10} ${h/2} L ${w/2} ${h-10} L 10 ${h/2} Z" class="inner"/>\n                    <svg:text text-anchor="middle" x="${w/2}" y="${h/2}" dominant-baseline="central">${text}</svg:text>\n                  </svg:svg>\n                </div>\n                <jtk-source port-type="source" filter=".outer"/>\n                <jtk-target port-type="target"/>\n              </div>\n            ',
            tmplProcess: '\n                <div style="left:${left}px;top:${top}px;width:${w}px;height:${h}px;" class="flowchart-object flowchart-process">\n                  <div style="position:relative">\n                      <div class="node-edit node-action">\n                          <i class="fa fa-2x fa-pencil-square-o"/>\n                      </div>\n                      <div class="node-delete node-action">\n                          <i class="fa fa-2x fa-times"/>\n                      </div>\n                      <span class="label label-success pull-right" style="position: relative; z-index: 100; margin: 5px">Controls ${controls.length}</span>\n                      <svg:svg width="${w}" height="${h}">\n                          <svg:rect x="0" y="0" width="${w}" height="${h}" class="outer drag-start"/>\n                          <svg:rect x="10" y="10" width="${w-20}" height="${h-20}" class="inner"/>\n                          <svg:text text-anchor="middle" x="${w/2}" y="${h/2}" dominant-baseline="central">${text}</svg:text>\n                      </svg:svg>\n                  </div>\n                  <jtk-target port-type="target"/>\n                  <jtk-source port-type="source" filter=".outer"/>\n              </div>\n            ',
            tmplFinish: '\n              <div style="left:${left}px;top:${top}px;width:${w}px;height:${h}px;" class="flowchart-object flowchart-finish">\n                <div style="position:relative">\n                  <svg:svg width="${w}" height="${h}">\n                    <svg:rect x="0" y="0" width="${w}" height="${h}"/>\n                    <svg:text text-anchor="middle" x="${w/2}" y="${h/2}" dominant-baseline="central">${text}</svg:text>\n                  </svg:svg>\n                </div>\n                <jtk-target port-type="target"/>\n              </div>\n            '
          },
          view: {
            nodes: {
              "start": {
                template: "tmplStart"
              },
              "selectable": {
                events: {
                  tap: function tap(params) {
                    toolkit.toggleSelection(params.node);
                  }
                }
              },
              "decision": {
                parent: "selectable",
                template: "tmplDecision"
              },
              "process": {
                parent: "selectable",
                template: "tmplProcess"
              },
              "finish": {
                parent: "selectable",
                template: "tmplFinish"
              }
            },
            // There are two edge types defined - 'yes' and 'no', sharing a common
            // parent.
            edges: {
              "default": {
                anchor: "AutoDefault",
                endpoint: "Blank",
                connector: ["Flowchart", { cornerRadius: 5 }],
                paintStyle: { strokeWidth: 2, stroke: "#f76258", outlineWidth: 3, outlineStroke: "transparent" }, //	paint style for this edge type.
                hoverPaintStyle: { strokeWidth: 2, stroke: "rgb(67,67,67)" }, // hover paint style for this edge type.
                events: {
                  "dblclick": function dblclick(params) {
                    if (self.attrs['on-dbl-click-edge']) {
                      self.attrs['on-dbl-click-edge'](toolkit, params);
                    }
                  }
                },
                overlays: [["Arrow", { location: 1, width: 10, length: 10 }], ["Arrow", { location: 0.3, width: 10, length: 10 }]]
              },
              "connection": {
                parent: "default",
                overlays: [["Label", {
                  label: "${label}",
                  events: {
                    click: function click(params) {
                      _editLabel(params.edge);
                    }
                  }
                }]]
              }
            },

            ports: {
              "start": {
                edgeType: "default"
              },
              "source": {
                maxConnections: -1,
                edgeType: "connection"
              },
              "target": {
                maxConnections: -1,
                isTarget: true,
                dropOptions: {
                  hoverClass: "connection-drop"
                }
              }
            }
          },
          // Layout the nodes using an absolute layout
          layout: {
            type: "Absolute"
          },
          events: {
            canvasClick: function canvasClick(e) {
              toolkit.clearSelection();
            },
            edgeAdded: function edgeAdded(params) {
              if (params.addedByMouse) {
                // const isSourceStartNode = params.source.data.type === 'start';
                // const isTargetFinishNode = params.target.data.type === 'finish';
                var isSourceDecisionNode = params.source.data.type === 'decision';

                // Rules:
                // Decision -> Finish = Label
                // Process -> Finish = No Label
                // Source -> Process = No Label
                if (isSourceDecisionNode) {
                  // FIXME: This is business logic move to route
                  _editLabel(params.edge, true);
                }
              }
            },
            nodeDropped: function nodeDropped(info) {
              console.log("node ", info.source.id, "dropped on ", info.target.id);
            }
          },
          miniview: {
            container: miniviewElement
          },
          lassoInvert: true,
          elementsDroppable: true,
          consumeRightClick: false,
          dragOptions: {
            filter: ".jtk-draw-handle, .node-action, .node-action i",
            magnetize: true
          }
        });

        // Load the data.
        toolkit.load({
          data: _this.attrs.data || {}
        });

        // listener for mode change on renderer.
        renderer.bind("modeChanged", function (mode) {
          //jsPlumb.removeClass(controls.querySelectorAll("[mode]"), "selected-mode");
          //jsPlumb.addClass(controls.querySelectorAll("[mode='" + mode + "']"), "selected-mode");
          jsPlumb.removeClass(controls.find("[mode]"), "selected-mode");
          jsPlumb.addClass(controls.find("[mode='" + mode + "']"), "selected-mode");
        });

        // pan mode/select mode
        jsPlumb.on(controls, "tap", "[mode]", function () {
          renderer.setMode(this.getAttribute("mode"));
        });

        // on home button click, zoom content to fit.
        jsPlumb.on(controls, "tap", "[reset]", function () {
          toolkit.clearSelection();
          renderer.zoomToFit();
        });

        // configure Drawing tools.
        new jsPlumbToolkit.DrawingTools({
          renderer: renderer
        });

        jsPlumb.on(canvasElement, "tap", ".node-delete", function () {
          var info = renderer.getObjectInfo(this);

          bootbox.confirm({
            title: "Please Confirm",
            message: "Delete '" + info.obj.data.text + "'",
            callback: function callback(result) {
              if (result) {
                toolkit.removeNode(info.obj);
              }
            }
          });
        });

        // change a question or action's label
        jsPlumb.on(canvasElement, "tap", ".node-edit", function (e) {
          // getObjectInfo is a method that takes some DOM element (this function's `this` is
          // set to the element that fired the event) and returns the toolkit data object that
          // relates to the element. it ascends through parent nodes until it finds a node that is
          // registered with the toolkit.
          var info = renderer.getObjectInfo(this);

          if (self.attrs['on-edit-node']) {
            self.attrs['on-edit-node']({ toolkit: toolkit, info: info, e: e });
          }

          if (info.obj.data.type !== 'process') {
            bootbox.prompt({
              title: "Edit " + info.obj.data.type + " name",
              value: info.obj.data.text || "",
              placeholder: 'Enter text here',
              callback: function callback(text) {
                if (text && text.length > 2) {
                  // if name is at least 2 chars long, update the underlying data and
                  // update the UI.s
                  info.obj.data.text = text;
                  toolkit.updateNode(info.obj, info.obj.data);
                }
              }
            });
          }
        });

        // ------------------------ / rendering ------------------------------------

        // ------------------------ drag and drop new tables/views -----------------

        //
        // Here, we are registering elements that we will want to drop onto the workspace and have
        // the toolkit recognise them as new nodes.
        //
        //  typeExtractor: this function takes an element and returns to jsPlumb the type of node represented by
        //                 that element. In this application, that information is stored in the 'jtk-node-type' attribute.
        //
        //  dataGenerator: this function takes a node type and returns some default data for that node type.
        //
        renderer.registerDroppableNodes({
          droppables: nodePalette.find("li"),
          dragOptions: {
            zIndex: 50000,
            cursor: "move",
            clone: true
          },
          typeExtractor: function typeExtractor(el) {
            return el.getAttribute("jtk-node-type");
          },
          dataGenerator: function dataGenerator(type) {
            return {
              w: 120,
              h: 80
            };
          }
        });

        // ------------------------ / drag and drop new tables/views -----------------
      });
    }

  });
});
define('spaircorp-ui/components/link-to-external', ['exports', 'ember-engines/-private/link-to-external-component'], function (exports, _emberEnginesPrivateLinkToExternalComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEnginesPrivateLinkToExternalComponent['default'];
    }
  });
});
define("spaircorp-ui/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("spaircorp-ui/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("spaircorp-ui/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define("spaircorp-ui/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("spaircorp-ui/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("spaircorp-ui/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("spaircorp-ui/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('spaircorp-ui/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("spaircorp-ui/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("spaircorp-ui/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define('spaircorp-ui/components/object-bin', ['exports', 'ember-drag-drop/components/object-bin'], function (exports, _emberDragDropComponentsObjectBin) {
  exports['default'] = _emberDragDropComponentsObjectBin['default'];
});
define('spaircorp-ui/components/one-way-checkbox', ['exports', 'ember-one-way-controls/components/one-way-checkbox'], function (exports, _emberOneWayControlsComponentsOneWayCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayCheckbox['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-color', ['exports', 'ember-one-way-controls/components/one-way-color'], function (exports, _emberOneWayControlsComponentsOneWayColor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayColor['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-date', ['exports', 'ember-one-way-controls/components/one-way-date'], function (exports, _emberOneWayControlsComponentsOneWayDate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayDate['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-datetime-local', ['exports', 'ember-one-way-controls/components/one-way-datetime-local'], function (exports, _emberOneWayControlsComponentsOneWayDatetimeLocal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayDatetimeLocal['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-email', ['exports', 'ember-one-way-controls/components/one-way-email'], function (exports, _emberOneWayControlsComponentsOneWayEmail) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayEmail['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-file', ['exports', 'ember-one-way-controls/components/one-way-file'], function (exports, _emberOneWayControlsComponentsOneWayFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayFile['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-hidden', ['exports', 'ember-one-way-controls/components/one-way-hidden'], function (exports, _emberOneWayControlsComponentsOneWayHidden) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayHidden['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-input', ['exports', 'ember-one-way-controls/components/one-way-input'], function (exports, _emberOneWayControlsComponentsOneWayInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayInput['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-month', ['exports', 'ember-one-way-controls/components/one-way-month'], function (exports, _emberOneWayControlsComponentsOneWayMonth) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayMonth['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-number', ['exports', 'ember-one-way-controls/components/one-way-number'], function (exports, _emberOneWayControlsComponentsOneWayNumber) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayNumber['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-password', ['exports', 'ember-one-way-controls/components/one-way-password'], function (exports, _emberOneWayControlsComponentsOneWayPassword) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayPassword['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-radio', ['exports', 'ember-one-way-controls/components/one-way-radio'], function (exports, _emberOneWayControlsComponentsOneWayRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayRadio['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-range', ['exports', 'ember-one-way-controls/components/one-way-range'], function (exports, _emberOneWayControlsComponentsOneWayRange) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayRange['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-search', ['exports', 'ember-one-way-controls/components/one-way-search'], function (exports, _emberOneWayControlsComponentsOneWaySearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySearch['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-select', ['exports', 'ember-one-way-controls/components/one-way-select'], function (exports, _emberOneWayControlsComponentsOneWaySelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySelect['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-select/option', ['exports', 'ember-one-way-controls/components/one-way-select/option'], function (exports, _emberOneWayControlsComponentsOneWaySelectOption) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySelectOption['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-tel', ['exports', 'ember-one-way-controls/components/one-way-tel'], function (exports, _emberOneWayControlsComponentsOneWayTel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTel['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-text', ['exports', 'ember-one-way-controls/components/one-way-text'], function (exports, _emberOneWayControlsComponentsOneWayText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayText['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-textarea', ['exports', 'ember-one-way-controls/components/one-way-textarea'], function (exports, _emberOneWayControlsComponentsOneWayTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTextarea['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-time', ['exports', 'ember-one-way-controls/components/one-way-time'], function (exports, _emberOneWayControlsComponentsOneWayTime) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTime['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-url', ['exports', 'ember-one-way-controls/components/one-way-url'], function (exports, _emberOneWayControlsComponentsOneWayUrl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayUrl['default'];
    }
  });
});
define('spaircorp-ui/components/one-way-week', ['exports', 'ember-one-way-controls/components/one-way-week'], function (exports, _emberOneWayControlsComponentsOneWayWeek) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayWeek['default'];
    }
  });
});
define('spaircorp-ui/components/script-instance', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    _currentNode: null,
    previousNode: null,
    currentNode: _ember['default'].computed('_currentNode', {
      get: function get(key) {
        return this.get('_currentNode');
      },
      set: function set(key, value) {
        this.set('_currentNode', value);

        if (value.type === 'finish') {
          this.attrs.onFinish(this.get('script'));
        }

        return value;
      }
    }),

    canPressPreviousButton: _ember['default'].computed('previousNode', function () {
      var previousNode = this.get('previousNode');
      return !_ember['default'].isBlank(previousNode) && previousNode.type !== 'start';
    }),

    canPressNextButton: _ember['default'].computed('currentNode', function () {
      var currentNode = this.get('currentNode');
      return !_ember['default'].isBlank(currentNode) && currentNode.type !== 'finish';
    }),

    // processNodes: Ember.computed('script.diagram.nodes.@each', function(nodes) {
    //   return nodes.filterBy('type', 'process')
    // }),

    didInsertElement: function didInsertElement() {
      var startNode = this.get('script.diagram.nodes').findBy('type', 'start');
      this.send('advance', startNode);
    },

    actions: {
      advance: function advance(currentNode, previousNode) {
        debugger;

        if (currentNode.type === 'start') {
          var exitEdge = this.get('script.diagram.edges').findBy('source', currentNode.id);
          var nextNode = this.get('script.diagram.nodes').findBy('id', exitEdge.target);
          this.set('currentNode', nextNode);
        } else if (currentNode.type === 'process') {
          this.set('previousNode', currentNode);

          var exitEdge = this.get('script.diagram.edges').findBy('source', currentNode.id);
          var nextNode = this.get('script.diagram.nodes').findBy('id', exitEdge.target);

          if (nextNode.type === 'decision') {
            this.send('advance', nextNode, currentNode);
            return;
          } else {
            this.set('currentNode', nextNode);
          }
        } else if (currentNode.type === 'decision') {
          // Get all edges exiting the decision
          var exitEdges = this.get('script.diagram.edges').filterBy('source', currentNode.id);

          // Match by user entry
          var branchingControl = previousNode.controls.findBy('branch', true);
          var exitEdge = this.get('script.diagram.edges').findBy('data.label', branchingControl.answer); // FIXME ************************** HARD CODED

          var nextNode = this.get('script.diagram.nodes').findBy('id', exitEdge.target);
          this.set('currentNode', nextNode);
        }
      },

      goTo: function goTo(node) {
        this.set('currentNode', node);
        this.set('previousNode', null); // TODO Need to work out how to keep a history
      }
    }

  });
});
define('spaircorp-ui/components/script-step', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("spaircorp-ui/components/side-menu-link-to", ["exports", "ember-side-menu/components/side-menu-link-to"], function (exports, _emberSideMenuComponentsSideMenuLinkTo) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberSideMenuComponentsSideMenuLinkTo["default"];
    }
  });
});
define("spaircorp-ui/components/side-menu-toggle", ["exports", "ember-side-menu/components/side-menu-toggle"], function (exports, _emberSideMenuComponentsSideMenuToggle) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberSideMenuComponentsSideMenuToggle["default"];
    }
  });
});
define("spaircorp-ui/components/side-menu", ["exports", "ember-side-menu/components/side-menu"], function (exports, _emberSideMenuComponentsSideMenu) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberSideMenuComponentsSideMenu["default"];
    }
  });
});
define('spaircorp-ui/components/sortable-group', ['exports', 'ember-sortable/components/sortable-group'], function (exports, _emberSortableComponentsSortableGroup) {
  exports['default'] = _emberSortableComponentsSortableGroup['default'];
});
define('spaircorp-ui/components/sortable-item', ['exports', 'ember-sortable/components/sortable-item'], function (exports, _emberSortableComponentsSortableItem) {
  exports['default'] = _emberSortableComponentsSortableItem['default'];
});
define('spaircorp-ui/components/sortable-objects', ['exports', 'ember-drag-drop/components/sortable-objects'], function (exports, _emberDragDropComponentsSortableObjects) {
  exports['default'] = _emberDragDropComponentsSortableObjects['default'];
});
define('spaircorp-ui/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('spaircorp-ui/config/asset-manifest', ['exports', 'spaircorp-ui/config/environment'], function (exports, _spaircorpUiConfigEnvironment) {

  var modulePrefix = _spaircorpUiConfigEnvironment['default'].modulePrefix;
  var metaName = modulePrefix + '/config/asset-manifest';
  var nodeName = modulePrefix + '/config/node-asset-manifest';

  var config = {};

  try {
    // If we have a Node version of the asset manifest, use that for FastBoot and
    // similar environments.
    if (require.has(nodeName)) {
      config = require(nodeName)['default']; // eslint-disable-line
    } else {
        var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
        config = JSON.parse(unescape(rawConfig));
      }
  } catch (err) {
    throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "' + metaName + '" is present. For non-browser environments, verify that you included the node-asset-manifest module.');
  }

  exports['default'] = config;
});
define('spaircorp-ui/controllers/admin/scripts/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    saveUrl: _ember['default'].computed('model.id', function () {
      return '/scripts/' + this.get('model.id') + '/diagram';
    }),

    autoSave: true,

    appController: _ember['default'].inject.controller('application'),
    currentRouteName: _ember['default'].computed.reads('appController.currentRouteName'),

    hasStartNode: _ember['default'].computed('model.steps.@each', function () {
      return this.get('model.steps').filterBy('stereotype', 'start-step');
    })

  });
});
define('spaircorp-ui/controllers/admin/scripts/edit/process/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    actions: {
      add: function add(obj /*, ops*/) {
        var _this = this;

        if (obj.origin === 'control-toolbox') {
          bootbox.prompt("Label?", function (label) {
            if (label) {
              _this.get('model.obj.data.controls').push({
                type: obj.type,
                controlType: obj.controlType,
                label: label
              });

              // Need to manually trigger change events because it is not an ember object
              _this.notifyPropertyChange('model');
            } else {
              _ember['default'].debug('Operation Cancelled');
            }
          });
        }
      },

      'delete': function _delete(control) {
        var controls = this.get('model.obj.data.controls');
        var index = controls.indexOf(control);
        controls.splice(index, 1);

        // Need to manually trigger change events because it is not an ember object
        this.notifyPropertyChange('model');
      }
    }
  });
});
define('spaircorp-ui/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('spaircorp-ui/helpers/app-version', ['exports', 'ember', 'spaircorp-ui/config/environment'], function (exports, _ember, _spaircorpUiConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _spaircorpUiConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('spaircorp-ui/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _emberComposableHelpersHelpersAppend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend['default'];
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend.append;
    }
  });
});
define('spaircorp-ui/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _emberComposableHelpersHelpersArray) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersArray['default'];
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersArray.array;
    }
  });
});
define('spaircorp-ui/helpers/cancel-all', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.cancelHelper = cancelHelper;

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      _ember['default'].assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _emberConcurrencyHelpers.taskHelperClosure)('cancelAll', args);
  }

  exports['default'] = _ember['default'].Helper.helper(cancelHelper);
});
define('spaircorp-ui/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _emberComposableHelpersHelpersChunk) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk['default'];
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk.chunk;
    }
  });
});
define('spaircorp-ui/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _emberComposableHelpersHelpersCompact) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact['default'];
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact.compact;
    }
  });
});
define('spaircorp-ui/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _emberComposableHelpersHelpersCompute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute['default'];
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute.compute;
    }
  });
});
define('spaircorp-ui/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _emberComposableHelpersHelpersContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains.contains;
    }
  });
});
define('spaircorp-ui/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _emberComposableHelpersHelpersDec) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec['default'];
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec.dec;
    }
  });
});
define('spaircorp-ui/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _emberComposableHelpersHelpersDrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop['default'];
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop.drop;
    }
  });
});
define('spaircorp-ui/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('spaircorp-ui/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _emberComposableHelpersHelpersFilterBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy['default'];
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy.filterBy;
    }
  });
});
define('spaircorp-ui/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _emberComposableHelpersHelpersFilter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter['default'];
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter.filter;
    }
  });
});
define('spaircorp-ui/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _emberComposableHelpersHelpersFindBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy['default'];
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy.findBy;
    }
  });
});
define('spaircorp-ui/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _emberComposableHelpersHelpersFlatten) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten['default'];
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten.flatten;
    }
  });
});
define('spaircorp-ui/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _emberComposableHelpersHelpersGroupBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy['default'];
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy.groupBy;
    }
  });
});
define('spaircorp-ui/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('spaircorp-ui/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('spaircorp-ui/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _emberComposableHelpersHelpersHasNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext['default'];
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext.hasNext;
    }
  });
});
define('spaircorp-ui/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _emberComposableHelpersHelpersHasPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious.hasPrevious;
    }
  });
});
define('spaircorp-ui/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _emberComposableHelpersHelpersInc) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc['default'];
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc.inc;
    }
  });
});
define('spaircorp-ui/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _emberComposableHelpersHelpersIntersect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect['default'];
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect.intersect;
    }
  });
});
define('spaircorp-ui/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _emberComposableHelpersHelpersInvoke) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke['default'];
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke.invoke;
    }
  });
});
define('spaircorp-ui/helpers/is-after', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('spaircorp-ui/helpers/is-before', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/is-between', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _emberTruthHelpersHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual.isEqual;
    }
  });
});
define('spaircorp-ui/helpers/is-same-or-after', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/is-same-or-before', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/is-same', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _emberComposableHelpersHelpersJoin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin['default'];
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin.join;
    }
  });
});
define('spaircorp-ui/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _liquidFireHelpersLfLockModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel['default'];
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel.lfLockModel;
    }
  });
});
define('spaircorp-ui/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _liquidFireHelpersLfOr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr['default'];
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr.lfOr;
    }
  });
});
define('spaircorp-ui/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('spaircorp-ui/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('spaircorp-ui/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _emberComposableHelpersHelpersMapBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy['default'];
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy.mapBy;
    }
  });
});
define('spaircorp-ui/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _emberComposableHelpersHelpersMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap['default'];
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap.map;
    }
  });
});
define('spaircorp-ui/helpers/moment-add', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersMomentAdd) {
  exports['default'] = _emberMomentHelpersMomentAdd['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/moment-calendar', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('spaircorp-ui/helpers/moment-format', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/moment-from-now', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/moment-from', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersMomentFrom) {
  exports['default'] = _emberMomentHelpersMomentFrom['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/moment-subtract', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersMomentSubtract) {
  exports['default'] = _emberMomentHelpersMomentSubtract['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/moment-to-date', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersMomentToDate) {
  exports['default'] = _emberMomentHelpersMomentToDate['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/moment-to-now', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/moment-to', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentHelpersMomentTo) {
  exports['default'] = _emberMomentHelpersMomentTo['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('spaircorp-ui/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('spaircorp-ui/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _emberMomentHelpersMoment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMoment['default'];
    }
  });
});
define('spaircorp-ui/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _emberComposableHelpersHelpersNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext['default'];
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext.next;
    }
  });
});
define('spaircorp-ui/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('spaircorp-ui/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('spaircorp-ui/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('spaircorp-ui/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _emberComposableHelpersHelpersObjectAt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt['default'];
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt.objectAt;
    }
  });
});
define('spaircorp-ui/helpers/one-way-select/contains', ['exports', 'ember-one-way-controls/helpers/one-way-select/contains'], function (exports, _emberOneWayControlsHelpersOneWaySelectContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsHelpersOneWaySelectContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsHelpersOneWaySelectContains.contains;
    }
  });
});
define('spaircorp-ui/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _emberComposableHelpersHelpersOptional) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional['default'];
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional.optional;
    }
  });
});
define('spaircorp-ui/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('spaircorp-ui/helpers/perform', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.performHelper = performHelper;

  function performHelper(args, hash) {
    return (0, _emberConcurrencyHelpers.taskHelperClosure)('perform', args, hash);
  }

  exports['default'] = _ember['default'].Helper.helper(performHelper);
});
define('spaircorp-ui/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _emberComposableHelpersHelpersPipeAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipeAction['default'];
    }
  });
});
define('spaircorp-ui/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _emberComposableHelpersHelpersPipe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe['default'];
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe.pipe;
    }
  });
});
define('spaircorp-ui/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('spaircorp-ui/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _emberComposableHelpersHelpersPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious.previous;
    }
  });
});
define('spaircorp-ui/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _emberComposableHelpersHelpersQueue) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue['default'];
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue.queue;
    }
  });
});
define('spaircorp-ui/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _emberComposableHelpersHelpersRange) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange['default'];
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange.range;
    }
  });
});
define('spaircorp-ui/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _emberComposableHelpersHelpersReduce) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce['default'];
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce.reduce;
    }
  });
});
define('spaircorp-ui/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _emberComposableHelpersHelpersRejectBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy['default'];
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy.rejectBy;
    }
  });
});
define('spaircorp-ui/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _emberComposableHelpersHelpersRepeat) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat['default'];
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat.repeat;
    }
  });
});
define('spaircorp-ui/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _emberComposableHelpersHelpersReverse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse['default'];
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse.reverse;
    }
  });
});
define('spaircorp-ui/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _emberRouteActionHelperHelpersRouteAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteActionHelperHelpersRouteAction['default'];
    }
  });
});
define('spaircorp-ui/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _emberComposableHelpersHelpersShuffle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle['default'];
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle.shuffle;
    }
  });
});
define('spaircorp-ui/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('spaircorp-ui/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _emberComposableHelpersHelpersSlice) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice['default'];
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice.slice;
    }
  });
});
define('spaircorp-ui/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _emberComposableHelpersHelpersSortBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy['default'];
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy.sortBy;
    }
  });
});
define('spaircorp-ui/helpers/split', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.split = split;

  function split(params, hash) {
    var separator = hash.separator || ',';

    var _params = _slicedToArray(params, 1);

    var value = _params[0];

    if (!value) return '';

    return value.split(separator);
  }

  exports['default'] = _ember['default'].Helper.helper(split);
});
define('spaircorp-ui/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _emberComposableHelpersHelpersTake) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake['default'];
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake.take;
    }
  });
});
define('spaircorp-ui/helpers/task', ['exports', 'ember'], function (exports, _ember) {
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref);

    var task = _ref2[0];

    var args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports['default'] = _ember['default'].Helper.helper(taskHelper);
});
define('spaircorp-ui/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _emberComposableHelpersHelpersToggleAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggleAction['default'];
    }
  });
});
define('spaircorp-ui/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _emberComposableHelpersHelpersToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle['default'];
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle.toggle;
    }
  });
});
define('spaircorp-ui/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _emberComposableHelpersHelpersUnion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion['default'];
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion.union;
    }
  });
});
define('spaircorp-ui/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('spaircorp-ui/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _emberComposableHelpersHelpersWithout) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout['default'];
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout.without;
    }
  });
});
define('spaircorp-ui/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('spaircorp-ui/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'spaircorp-ui/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _spaircorpUiConfigEnvironment) {
  var _config$APP = _spaircorpUiConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('spaircorp-ui/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define("spaircorp-ui/initializers/coordinator-setup", ["exports", "spaircorp-ui/models/coordinator"], function (exports, _spaircorpUiModelsCoordinator) {
  exports["default"] = {
    name: "setup coordinator",

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register("drag:coordinator", _spaircorpUiModelsCoordinator["default"]);
      app.inject("component", "coordinator", "drag:coordinator");
    }
  };
});
define('spaircorp-ui/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('spaircorp-ui/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'spaircorp-ui/config/environment', 'spaircorp-ui/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _emberCliMirageUtilsReadModules, _spaircorpUiConfigEnvironment, _spaircorpUiMirageConfig, _emberCliMirageServer, _lodashAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_spaircorpUiConfigEnvironment['default'].environment, _spaircorpUiConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_spaircorpUiConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _spaircorpUiConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashAssign['default'])(modules, { environment: environment, baseConfig: _spaircorpUiMirageConfig['default'], testConfig: _spaircorpUiMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('spaircorp-ui/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports, _emberConcurrency) {
  exports['default'] = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('spaircorp-ui/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('spaircorp-ui/initializers/engines', ['exports', 'ember-engines/initializers/engines'], function (exports, _emberEnginesInitializersEngines) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEnginesInitializersEngines['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberEnginesInitializersEngines.initialize;
    }
  });
});
define('spaircorp-ui/initializers/export-application-global', ['exports', 'ember', 'spaircorp-ui/config/environment'], function (exports, _ember, _spaircorpUiConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_spaircorpUiConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _spaircorpUiConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_spaircorpUiConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('spaircorp-ui/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("spaircorp-ui/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {

  (0, _liquidFireEmberInternals.initialize)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define("spaircorp-ui/initializers/side-menu", ["exports", "ember-side-menu/initializers/side-menu"], function (exports, _emberSideMenuInitializersSideMenu) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberSideMenuInitializersSideMenu["default"];
    }
  });
  Object.defineProperty(exports, "initialize", {
    enumerable: true,
    get: function get() {
      return _emberSideMenuInitializersSideMenu.initialize;
    }
  });
});
define('spaircorp-ui/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('spaircorp-ui/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('spaircorp-ui/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("spaircorp-ui/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('spaircorp-ui/instance-initializers/load-asset-manifest', ['exports', 'spaircorp-ui/config/asset-manifest'], function (exports, _spaircorpUiConfigAssetManifest) {
  exports.initialize = initialize;

  /**
   * Initializes the AssetLoader service with a generated asset-manifest.
   */

  function initialize(instance) {
    var service = instance.lookup('service:asset-loader');
    service.pushManifest(_spaircorpUiConfigAssetManifest['default']);
  }

  exports['default'] = {
    name: 'load-asset-manifest',
    initialize: initialize
  };
});
define("spaircorp-ui/interfaces/jsplumb", ["exports"], function (exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
});
define('spaircorp-ui/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
    */

    this.get('/scripts');
    this.get('/scripts/:id');
    this.post('/scripts');
    this.patch('/scripts/:id');
    this.del('/scripts/:id');
    this.post('/scripts/:id/diagram', function (schema, request) {
      debugger;
      var script = script = schema.scripts.find(request.params.id);
      script.diagram = JSON.parse(request.requestBody);
      script.save();
      return {
        status: 'success'
      };
    });
  };
});
define('spaircorp-ui/mirage/factories/script', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Factory.extend({
    name: function name(i) {
      return 'script#' + i;
    },
    date: new Date(),
    status: 'Online',
    url: function url(i) {
      return 'http://test.com?script=' + i;
    },
    diagram: {}
  });
});
define('spaircorp-ui/mirage/models/script', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({});
});
define("spaircorp-ui/mirage/scenarios/default", ["exports"], function (exports) {
  exports["default"] = function (server) {

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */

    var script1 = server.create('script', {
      diagram: {
        "nodes": [{
          "id": "start",
          "type": "start",
          "text": "Start",
          "left": 50,
          "top": 50,
          "w": 100,
          "h": 70
        }],
        "edges": []
      }
    });
    var script2 = server.create('script', {
      diagram: {
        "nodes": [{
          "id": "start",
          "type": "start",
          "text": "Start",
          "left": 50,
          "top": 50,
          "w": 100,
          "h": 70
        }, {
          "id": "question1",
          "type": "decision",
          "text": "Do Something?",
          "left": 290,
          "top": 79,
          "w": 150,
          "h": 150
        }, {
          "id": "decide",
          "type": "process",
          "text": "Make Decision",
          "left": 660,
          "top": 187,
          "w": 120,
          "h": 120,
          "controls": [{
            "type": "input",
            "controlType": "Textbox",
            "label": "Name",
            "default": "Gold Ring"
          }, {
            "type": "input",
            "controlType": "Textarea",
            "label": "Description",
            "default": "Made from 24K Gold, excelent condition"
          }, {
            "type": "input",
            "controlType": "Currency",
            "label": "Amount",
            "default": "1500.00"
          }, {
            "type": "input",
            "controlType": "Number",
            "label": "Age in years",
            "default": "14"
          }, {
            "type": "input",
            "controlType": "Date",
            "label": "Reveived on",
            "default": ""
          }, {
            "type": "options",
            "controlType": "List",
            "label": "Colour",
            "options": "red,gree,blue"
          }, {
            "type": "options",
            "controlType": "Checkbox",
            "label": "Suitable for",
            "options": "Child,Male,Female"
          }, {
            "type": "options",
            "controlType": "Radio",
            "label": "Condition",
            "options": "Poor,Good,Excellent"
          }]
        }, {
          "id": "something",
          "type": "finish",
          "text": "Do Something",
          "left": 827,
          "top": 414,
          "w": 120,
          "h": 50
        }, {
          "id": "question2",
          "type": "decision",
          "text": "Do Nothing?",
          "left": 74,
          "top": 330,
          "w": 150,
          "h": 150
        }, {
          "id": "nothing",
          "type": "finish",
          "text": "Do Nothing",
          "left": 433,
          "top": 558,
          "w": 100,
          "h": 50
        }],
        "edges": [{
          "id": 1,
          "source": "start",
          "target": "decide"
        }, {
          "id": 2,
          "source": "question1",
          "target": "decide",
          "data": { "label": "yes", "type": "connection" }
        }, {
          "id": 3,
          "source": "question1",
          "target": "question2",
          "data": { "label": "no", "type": "connection" }
        }, {
          "id": 4,
          "source": "question2",
          "target": "decide",
          "data": { "label": "no", "type": "connection" }
        }, {
          "id": 5,
          "source": "question2",
          "target": "nothing",
          "data": { "label": "yes", "type": "connection" }
        }, {
          "id": 6,
          "source": "decide",
          "target": "nothing",
          "data": { "label": "Can't Decide", "type": "connection" }
        }, {
          "id": 7,
          "source": "decide",
          "target": "something",
          "data": { "label": "Decision Made", "type": "connection" }
        }]
      }
    });
    var script3 = server.create('script', {
      name: 'Customer Details',
      diagram: {
        "nodes": [{
          "w": 120,
          "h": 80,
          "type": "start",
          "left": 188,
          "top": 8,
          "id": "3d4ac958-b00b-49b7-85df-0ded014a4be6",
          "text": "START"
        }, {
          "w": 157,
          "h": 110,
          "type": "process",
          "left": 178,
          "top": 156,
          "text": "Enter Your Details",
          "id": "cbfe475e-ad76-4136-9d9b-25e9ca4b7d10",
          "controls": [{
            "type": "input",
            "controlType": "Textbox",
            "label": "First Name"
          }, {
            "type": "input",
            "controlType": "Textbox",
            "label": "Surname"
          }, {
            "type": "options",
            "controlType": "Radio",
            "label": "Gender",
            "options": "Male,Female",
            "branch": true
          }]
        }, {
          "w": 120,
          "h": 80,
          "type": "decision",
          "left": 473,
          "top": 168,
          "text": "Gender",
          "id": "51163a4e-96b1-4c77-9bf5-6c9124a4ea42"
        }, {
          "w": 120,
          "h": 80,
          "type": "finish",
          "left": 494,
          "top": 340,
          "id": "476c3100-41a5-4298-81fd-1795e81ae47a",
          "text": "FINISH"
        }, {
          "w": 120,
          "h": 80,
          "type": "process",
          "left": 710.3130001607423,
          "top": 165.5024238357675,
          "text": "Extra Details",
          "id": "6049e58d-6291-49f2-a803-9812e0b33199",
          "controls": [{
            "type": "input",
            "controlType": "Textbox",
            "label": "Maiden Name"
          }]
        }],
        "edges": [{
          "source": "3d4ac958-b00b-49b7-85df-0ded014a4be6",
          "target": "cbfe475e-ad76-4136-9d9b-25e9ca4b7d10",
          "data": {
            "label": "",
            "id": "b784e25a-446f-430c-9a88-17a79474560d",
            "type": "default"
          }
        }, {
          "source": "cbfe475e-ad76-4136-9d9b-25e9ca4b7d10",
          "target": "51163a4e-96b1-4c77-9bf5-6c9124a4ea42",
          "data": {
            "label": "",
            "id": "3d963d76-7994-499a-8a68-7ec02de94def",
            "type": "connection"
          }
        }, {
          "source": "51163a4e-96b1-4c77-9bf5-6c9124a4ea42",
          "target": "476c3100-41a5-4298-81fd-1795e81ae47a",
          "data": {
            "label": "Male",
            "id": "83c64be4-f8f5-4d87-aee8-51c2fbb7bba4",
            "type": "connection"
          }
        }, {
          "source": "51163a4e-96b1-4c77-9bf5-6c9124a4ea42",
          "target": "6049e58d-6291-49f2-a803-9812e0b33199",
          "data": {
            "label": "Female",
            "id": "abb631a2-c029-456e-abd8-846cd8306899",
            "type": "connection"
          }
        }, {
          "source": "6049e58d-6291-49f2-a803-9812e0b33199",
          "target": "476c3100-41a5-4298-81fd-1795e81ae47a",
          "data": {
            "label": "",
            "id": "99b17437-9439-4af2-b568-c7be6e8bdd83",
            "type": "connection"
          }
        }],
        "ports": [],
        "groups": []
      }
    });
  };
});
define('spaircorp-ui/mirage/serializers/script', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('spaircorp-ui/models/coordinator', ['exports', 'ember', 'spaircorp-ui/models/obj-hash'], function (exports, _ember, _spaircorpUiModelsObjHash) {
  exports['default'] = _ember['default'].Object.extend(_ember['default'].Evented, {
    objectMap: _ember['default'].computed(function () {
      return _spaircorpUiModelsObjHash['default'].create();
    }),

    getObject: function getObject(id, ops) {
      ops = ops || {};
      var payload = this.get('objectMap').getObj(id);

      if (payload.ops.source) {
        payload.ops.source.sendAction('action', payload.obj);
      }

      if (payload.ops.target) {
        payload.ops.target.sendAction('action', payload.obj);
      }

      this.trigger("objectMoved", { obj: payload.obj, source: payload.ops.source, target: ops.target });

      return payload.obj;
    },

    setObject: function setObject(obj, ops) {
      ops = ops || {};
      return this.get('objectMap').add({ obj: obj, ops: ops });
    }
  });
});
define('spaircorp-ui/models/obj-hash', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({
    content: {},
    contentLength: 0,
    length: _ember['default'].computed.alias('contentLength'),

    add: function add(obj) {
      var id = this.generateId();
      this.get('content')[id] = obj;
      this.incrementProperty("contentLength");
      return id;
    },

    getObj: function getObj(key) {
      var res = this.get('content')[key];
      if (!res) {
        throw "no obj for key " + key;
      }
      return res;
    },

    generateId: function generateId() {
      var num = Math.random() * 1000000000000.0;
      num = parseInt(num);
      num = "" + num;
      return num;
    },

    keys: function keys() {
      var res = [];
      for (var key in this.get('content')) {
        res.push(key);
      }
      return _ember['default'].A(res);
    }

  });
});
define('spaircorp-ui/models/script', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date'),
    status: _emberData['default'].attr('string'),
    url: _emberData['default'].attr('string'),
    diagram: _emberData['default'].attr('raw')
  });
});
define('spaircorp-ui/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('spaircorp-ui/router', ['exports', 'ember', 'spaircorp-ui/config/environment'], function (exports, _ember, _spaircorpUiConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _spaircorpUiConfigEnvironment['default'].locationType,
    rootURL: _spaircorpUiConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('admin', function () {
      this.route('scripts', function () {
        this.route('edit', { path: '/:script_id' }, function () {
          this.route('process', function () {
            this.route('edit', { path: '/:id' });
          });
        });
        this.route('new');
        this.route('test', { path: '/test/:script_id' });
      });
      this.route('reports');
      this.route('dashboard');
      this.route('user-management');
    });
    this.route('logout');
  });

  exports['default'] = Router;
});
define('spaircorp-ui/routes/admin', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('spaircorp-ui/routes/admin/dashboard', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('spaircorp-ui/routes/admin/reports', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('spaircorp-ui/routes/admin/scripts', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("spaircorp-ui/routes/admin/scripts/edit", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({

    notify: _ember["default"].inject.service(),

    actions: {

      onDblClickEdge: function onDblClickEdge(toolkit, params) {
        bootbox.confirm({
          title: "Please Confirm",
          message: "Delete Edge?",
          callback: function callback(result) {
            if (result) {
              toolkit.removeEdge(params.edge);
            }
          }
        });
      },

      onEditNode: function onEditNode(params) {
        var type = params.info.obj.data.type;
        if (type === 'process') {
          var _process = _ember["default"].Object.create({
            id: params.info.obj.data.id,
            obj: params.info.obj
          });
          this.transitionTo('admin.scripts.edit.process.edit', this.modelFor(this.routeName), _process);
        }
      },

      save: function save(toolkit) {
        var _this = this;

        var model = this.modelFor(this.routeName);

        var promise = model.save();

        return promise.then(function () {
          return toolkit.save({
            url: "/scripts/" + model.id + "/diagram"
          });
        }).then(function () {
          _this.get('notify').success('Save Successful!');
        })["catch"](function () {
          _this.get('notify').error('Unable to save!');
        });
      },

      test: function test() {
        this.transitionTo('admin.scripts.test', this.modelFor(this.routeName));
        return _ember["default"].RSVP.resolve();
      },

      beforeDrop: function beforeDrop(params) {
        _ember["default"].debug('beforeDrop() called');
      }
    }

  });
});
define('spaircorp-ui/routes/admin/scripts/edit/process/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    notify: _ember['default'].inject.service(),

    model: function model(params) {
      // FIXME work out this later
      this.transitionTo('admin.scripts.edit', this.modelFor('admin.scripts.edit'));
    },

    afterModel: function afterModel(model) {
      _ember['default'].assert('Must pass a valid node', model && model.id && model.obj && model.obj.data && model.obj.data.type);
      _ember['default'].assert('Must pass process node', model.obj.data.type === 'process');
      if (!_ember['default'].isArray(model.obj.data.controls)) {
        model.obj.data.controls = [];
      }
    },

    actions: {

      close: function close() {
        this.transitionTo('admin.scripts.edit', this.modelFor('admin.scripts.edit'));
      }

    }
  });
});
// add(obj/*, ops*/) {
//   debugger;
//   if (obj.origin === 'control-toolbox') {
//
//     bootbox.prompt("Label?", (label) => {
//       if (label) {
//         const model = this.modelFor(this.routeName);
//         model.data.controls.push({
//           type: 'textbox',
//           label: label
//         });
//       } else {
//         Ember.debug('Operation Cancelled');
//       }
//     });
//   }
// }
define('spaircorp-ui/routes/admin/scripts/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    notify: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('script');
    },

    actions: {

      create: function create() {
        this.transitionTo('admin.scripts.new');
      },

      edit: function edit(script) {
        this.transitionTo('admin.scripts.edit', script);
      },

      'delete': function _delete(script) {
        var _this = this;

        script.destroyRecord().then(function () {
          _this.get('notify').success('Record deleted');
        })['catch'](function () {
          _this.get('notify').error('Unable to delete record');
        });
      }
    }

  });
});
define('spaircorp-ui/routes/admin/scripts/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    notify: _ember['default'].inject.service(),

    model: function model() {
      var _this = this;

      var record = this.store.createRecord('script');
      var promise = record.save();
      return promise['catch'](function () {
        _this.get('notify').error('An error occurred while creating script');
      });
    },

    afterModel: function afterModel(model) {
      this.transitionTo('admin.scripts.edit', model);
    }

  });
});
define('spaircorp-ui/routes/admin/scripts/test', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    actions: {
      save: function save(script) {
        debugger;
      },

      end: function end(script) {
        this.transitionTo('admin.scripts.edit', script);
      }
    }
  });
});
define('spaircorp-ui/routes/admin/user-management', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('spaircorp-ui/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('spaircorp-ui/routes/logout', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      alert('TODO: Log me out !!');
    }

  });
});
define('spaircorp-ui/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('spaircorp-ui/services/asset-loader', ['exports', 'ember-asset-loader/services/asset-loader'], function (exports, _emberAssetLoaderServicesAssetLoader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAssetLoaderServicesAssetLoader['default'];
    }
  });
});
define('spaircorp-ui/services/drag-coordinator', ['exports', 'ember-drag-drop/services/drag-coordinator'], function (exports, _emberDragDropServicesDragCoordinator) {
  exports['default'] = _emberDragDropServicesDragCoordinator['default'];
});
define("spaircorp-ui/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define('spaircorp-ui/services/moment', ['exports', 'ember', 'spaircorp-ui/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _spaircorpUiConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_spaircorpUiConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('spaircorp-ui/services/notify', ['exports', 'ember-notify'], function (exports, _emberNotify) {
  exports['default'] = _emberNotify['default'];
});
define('spaircorp-ui/services/side-menu', ['exports', 'ember-side-menu/services/side-menu'], function (exports, _emberSideMenuServicesSideMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSideMenuServicesSideMenu['default'];
    }
  });
});
define("spaircorp-ui/templates/admin", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Hx0ROcUa", "block": "{\"statements\":[[\"comment\",\"\\n<nav class=\\\"navbar navbar-default\\\">\\n  <button class=\\\"navbar-toggle\\\" data-target=\\\".navbar-ex1-collapse\\\" data-toggle=\\\"collapse\\\" type=\\\"button\\\">\\n    <span class=\\\"sr-only\\\">Toggle navigation</span>\\n    <span class=\\\"fa fa-bars\\\"></span>\\n  </button>\\n  <div class=\\\"container-fluid\\\">\\n    <div class=\\\"navbar-header\\\">\\n{{#link-to \\\"index\\\" class=\\\"navbar-brand\\\"}}\\n        <p class=\\\"logo\\\"></p>\\n      {{/link-to}}    </div>\\n  </div>\\n</nav>\\n\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"comment\",\" Brand and toggle get grouped for better mobile display \"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#bs-example-navbar-collapse-1\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"admin.dashboard\"],[[\"class\"],[\"navbar-brand\"]],4],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"comment\",\" Collect the nav links, forms, and other content for toggling \"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"bs-example-navbar-collapse-1\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin.dashboard\"],null,3],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin.scripts\"],null,2],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin.reports\"],null,1],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"\\n\"],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-right\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"disabled\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"text-white\"],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"{Username}\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"disabled\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"text-white\"],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"append\",[\"helper\",[\"moment-format\"],[[\"helper\",[\"now\"],null,null],\"DD MMM YYYY HH:mm a\"],null],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"logout\"],[[\"class\"],[\"logout-button\"]],0],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"comment\",\" /.navbar-collapse \"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\" /.container-fluid \"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-power-off\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-map-o\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Reports\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-code\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Scripts\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-tachometer\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Dashboard\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Brand\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/admin.hbs" } });
});
define("spaircorp-ui/templates/admin/dashboard", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+DbXWjjz", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"TODO\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/admin/dashboard.hbs" } });
});
define("spaircorp-ui/templates/admin/reports", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "D7KUGwYF", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"TODO\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/admin/reports.hbs" } });
});
define("spaircorp-ui/templates/admin/scripts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "b2YgoHg5", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"liquid-outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/admin/scripts.hbs" } });
});
define("spaircorp-ui/templates/admin/scripts/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "aE6qNiTB", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"script-name\"],[\"flush-element\"],[\"text\",\"Name\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"one-way-input\"],[[\"get\",[\"model\",\"name\"]]],[[\"placeholder\",\"update\",\"class\"],[\"Name\",[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"model\",\"name\"]]],null]],null],\"form-control\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"\\n\"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"jsplumb-toolkit\"],null,[[\"data\",\"on-dbl-click-edge\",\"on-edit-node\",\"before-drop\",\"save-url\"],[[\"helper\",[\"readonly\"],[[\"get\",[\"model\",\"diagram\"]]],null],[\"helper\",[\"route-action\"],[\"onDblClickEdge\"],null],[\"helper\",[\"route-action\"],[\"onEditNode\"],null],[\"helper\",[\"route-action\"],[\"beforeDrop\"],null],[\"helper\",[\"readonly\"],[[\"get\",[\"saveUrl\"]]],null]]],0],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"async-button\"],null,[[\"class\",\"action\",\"default\",\"pending\"],[\"btn btn-default col-xs-6\",[\"helper\",[\"route-action\"],[\"test\",[\"get\",[\"model\"]]],null],\"Test\",\"Please wait...\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"async-button\"],null,[[\"class\",\"action\",\"default\",\"pending\"],[\"btn btn-primary col-xs-6\",[\"helper\",[\"route-action\"],[\"save\",[\"get\",[\"model\"]]],null],\"Save\",\"Saving...\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\\n\\n\\n\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"liquid-outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/admin/scripts/edit.hbs" } });
});
define("spaircorp-ui/templates/admin/scripts/edit/process/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PzNHW0uj", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"animated slideInRight diagram-overlay\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger\"],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"route-action\"],[\"close\"],null],null],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-times fa-2x\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"one-way-input\"],[[\"get\",[\"model\",\"obj\",\"data\",\"text\"]]],[[\"update\",\"class\"],[[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"model\",\"obj\",\"data\",\"text\"]]],null]],null],\"\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-4\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"padding-left:3px; overflow-y: auto\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Controls\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"draggable-object\"],null,[[\"content\"],[[\"helper\",[\"hash\"],null,[[\"type\",\"controlType\",\"origin\"],[\"input\",\"Textbox\",\"control-toolbox\"]]]]],11],[\"text\",\"        \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"draggable-object\"],null,[[\"content\"],[[\"helper\",[\"hash\"],null,[[\"type\",\"controlType\",\"origin\"],[\"input\",\"Textarea\",\"control-toolbox\"]]]]],10],[\"text\",\"        \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"draggable-object\"],null,[[\"content\"],[[\"helper\",[\"hash\"],null,[[\"type\",\"controlType\",\"origin\"],[\"input\",\"Currency\",\"control-toolbox\"]]]]],9],[\"text\",\"        \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"draggable-object\"],null,[[\"content\"],[[\"helper\",[\"hash\"],null,[[\"type\",\"controlType\",\"origin\"],[\"input\",\"Date\",\"control-toolbox\"]]]]],8],[\"text\",\"        \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"draggable-object\"],null,[[\"content\"],[[\"helper\",[\"hash\"],null,[[\"type\",\"controlType\",\"origin\"],[\"input\",\"Number\",\"control-toolbox\"]]]]],7],[\"text\",\"        \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"draggable-object\"],null,[[\"content\"],[[\"helper\",[\"hash\"],null,[[\"type\",\"controlType\",\"origin\"],[\"options\",\"List\",\"control-toolbox\"]]]]],6],[\"text\",\"        \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"draggable-object\"],null,[[\"content\"],[[\"helper\",[\"hash\"],null,[[\"type\",\"controlType\",\"origin\"],[\"options\",\"Checkbox\",\"control-toolbox\"]]]]],5],[\"text\",\"        \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"draggable-object\"],null,[[\"content\"],[[\"helper\",[\"hash\"],null,[[\"type\",\"controlType\",\"origin\"],[\"options\",\"Radio\",\"control-toolbox\"]]]]],4],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-8\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"draggable-object-target\"],null,[[\"action\",\"class\"],[\"add\",\"control-drop-area\"]],3],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-2x fa-th js-control-drag-handle\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"style\",\"cursor: move\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-times pull-right btn\"],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"control\"]]],null],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"component\"],[[\"helper\",[\"concat\"],[\"config-\",[\"get\",[\"control\",\"type\"]],\"-control\"],null]],[[\"control\"],[[\"get\",[\"control\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"draggable-object\"],null,[[\"class\",\"content\",\"isSortable\",\"sortingScope\",\"dragHandle\"],[\"control-group\",[\"get\",[\"control\"]],true,\"sortingGroup\",\".js-control-drag-handle\"]],0]],\"locals\":[\"control\"]},{\"statements\":[[\"text\",\" \"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"obj\",\"data\",\"controls\"]]],null,1]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"block\",[\"sortable-objects\"],null,[[\"sortableObjectList\",\"enableSort\",\"useSwap\",\"sortingScope\"],[[\"get\",[\"model\",\"obj\",\"data\",\"controls\"]],true,true,\"sortingGroup\"]],2]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-control dragable\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-stop-circle-o\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Radio\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"comment\",\"\\n          <div class=\\\"radio form-control config-control\\\">\\n            <label>\\n              <input type=\\\"radio\\\" checked disabled> Radio\\n            </label>\\n          </div>\\n          \"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-control dragable\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-check-square\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Checkbox\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"comment\",\"\\n          <div class=\\\"checkbox form-control config-control\\\">\\n            <label>\\n              <input type=\\\"checkbox\\\" checked disabled> Checkbox\\n            </label>\\n          </div>\\n          \"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-control dragable\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-list-ol\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" List\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"comment\",\"\\n          <select class=\\\"form-control config-control\\\" disabled>\\n            <option selected>List</option>\\n          </select>\\n          \"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-control dragable\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-square\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"text\",\"123\"],[\"close-element\"],[\"text\",\" Number\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"comment\",\"\\n          <div class=\\\"input-group\\\">\\n            <span class=\\\"input-group-addon\\\">#</span>\\n            <input type=\\\"number\\\" class=\\\"form-control config-control\\\" readonly placeholder=\\\"Number\\\">\\n          </div>\\n          \"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-control dragable\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-calendar\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Date\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"comment\",\"\\n          <div class=\\\"input-group\\\">\\n            <span class=\\\"input-group-addon\\\"><i class=\\\"fa fa-calendar\\\" aria-hidden=\\\"true\\\"></i></span>\\n            <input type=\\\"date\\\" class=\\\"form-control config-control\\\" readonly value=\\\"Date Picker\\\">\\n          </div>\\n          \"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-control dragable\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-money\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Currency\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"comment\",\"\\n          <div class=\\\"input-group\\\">\\n            <span class=\\\"input-group-addon\\\">$</span>\\n            <input type=\\\"number\\\" class=\\\"form-control config-control\\\" readonly placeholder=\\\"Currency\\\">\\n          </div>\\n          \"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-control dragable\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-text-height\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Textarea\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n          \"],[\"comment\",\"<textarea class=\\\"form-control config-control\\\" readonly>Text Area</textarea>\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-control dragable\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-text-width\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Textbox\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n          \"],[\"comment\",\"<input class=\\\"form-control config-control\\\" value=\\\"Textbox\\\" readonly>\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/admin/scripts/edit/process/edit.hbs" } });
});
define("spaircorp-ui/templates/admin/scripts/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "dO5lSIw/", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-success\"],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"route-action\"],[\"create\"],null],null],[\"flush-element\"],[\"text\",\"New Script\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table table-striped border-left table-hover\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Script\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Date\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Status\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"URL\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"script\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"helper\",[\"moment-format\"],[[\"get\",[\"script\",\"date\"]],\"DD-MM-YYYY\"],null],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"label label-success\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"script\",\"status\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"script\",\"url\"]]]]],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"script\",\"url\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pull-right\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"route-action\"],[\"edit\",[\"get\",[\"script\"]]],null],null],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-pencil\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger\"],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"route-action\"],[\"delete\",[\"get\",[\"script\"]]],null],null],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-trash\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"script\"]}],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/admin/scripts/index.hbs" } });
});
define("spaircorp-ui/templates/admin/scripts/test", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Tqs1vwvz", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-play-circle\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"text\",\" \"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"(DEMO)\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"script-instance\"],null,[[\"script\",\"onFinish\",\"onEnd\"],[[\"get\",[\"model\"]],[\"helper\",[\"route-action\"],[\"save\"],null],[\"helper\",[\"route-action\"],[\"end\"],null]]]],false],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/admin/scripts/test.hbs" } });
});
define("spaircorp-ui/templates/admin/user-management", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "h8weIULa", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/admin/user-management.hbs" } });
});
define("spaircorp-ui/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "kgHFoRd1", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"ember-notify\"],null,[[\"messageStyle\"],[\"bootstrap\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/application.hbs" } });
});
define("spaircorp-ui/templates/components/config-input-control", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "xznmCJJ9", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"control-label\"],[\"flush-element\"],[\"text\",\"Control Type\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"one-way-select\"],[[\"get\",[\"control\",\"controlType\"]]],[[\"class\",\"options\",\"update\"],[\"form-control\",[\"get\",[\"controlTypeOptions\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"controlType\"]]],null]],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"control-label\"],[\"flush-element\"],[\"text\",\"Label\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"one-way-input\"],[[\"get\",[\"control\",\"label\"]]],[[\"class\",\"update\"],[\"form-control\",[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"label\"]]],null]],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"control-label\"],[\"flush-element\"],[\"text\",\"Default\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"one-way-input\"],[[\"get\",[\"control\",\"default\"]]],[[\"class\",\"update\"],[\"form-control\",[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"default\"]]],null]],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/config-input-control.hbs" } });
});
define("spaircorp-ui/templates/components/config-options-control", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Hu4dJvIV", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"control-label\"],[\"flush-element\"],[\"text\",\"Control Type\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"one-way-select\"],[[\"get\",[\"control\",\"controlType\"]]],[[\"class\",\"options\",\"update\"],[\"form-control\",[\"get\",[\"controlTypeOptions\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"controlType\"]]],null]],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"control-label\"],[\"flush-element\"],[\"text\",\"Label\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"one-way-input\"],[[\"get\",[\"control\",\"label\"]]],[[\"class\",\"update\"],[\"form-control\",[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"label\"]]],null]],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"control-label\"],[\"flush-element\"],[\"text\",\"Options\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"one-way-textarea\"],[[\"get\",[\"control\",\"options\"]]],[[\"rows\",\"class\",\"placeholder\",\"update\"],[\"5\",\"form-control\",\"comma separated list\",[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"options\"]]],null]],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"control-label\"],[\"flush-element\"],[\"text\",\"Default\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"one-way-select\"],[[\"get\",[\"control\",\"default\"]]],[[\"options\",\"class\",\"update\"],[[\"get\",[\"options\"]],\"form-control\",[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"default\"]]],null]],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/config-options-control.hbs" } });
});
define("spaircorp-ui/templates/components/draggable-object-target", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "sBHokyGx", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"enableClicking\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"acceptForDrop\"]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"yield\",\"default\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/draggable-object-target.hbs" } });
});
define("spaircorp-ui/templates/components/draggable-object", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "S0NBIDv5", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"enableClicking\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"selectForDrag\"]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"yield\",\"default\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/draggable-object.hbs" } });
});
define("spaircorp-ui/templates/components/jsplumb-miniview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "TZy9LdB6", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/jsplumb-miniview.hbs" } });
});
define("spaircorp-ui/templates/components/jsplumb-palette", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2rhE3AGg", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/jsplumb-palette.hbs" } });
});
define("spaircorp-ui/templates/components/jsplumb-toolkit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "zxtRX7VJ", "block": "{\"statements\":[[\"comment\",\" the node palette \"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sidebar node-palette\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"jtk-node-type\",\"start\"],[\"static-attr\",\"title\",\"Drag to add new\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"height\",\"100\"],[\"static-attr\",\"width\",\"100\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"circle\",[]],[\"static-attr\",\"cx\",\"50\"],[\"static-attr\",\"cy\",\"50\"],[\"static-attr\",\"r\",\"50\"],[\"static-attr\",\"stroke-width\",\"3\"],[\"static-attr\",\"fill\",\"white\"],[\"static-attr\",\"class\",\"outer\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"circle\",[]],[\"static-attr\",\"cx\",\"50\"],[\"static-attr\",\"cy\",\"50\"],[\"static-attr\",\"r\",\"40\"],[\"static-attr\",\"stroke-width\",\"3\"],[\"static-attr\",\"fill\",\"white\"],[\"static-attr\",\"class\",\"inner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"text\",[]],[\"static-attr\",\"text-anchor\",\"middle\"],[\"static-attr\",\"x\",\"50\"],[\"static-attr\",\"y\",\"50\"],[\"static-attr\",\"dominant-baseline\",\"central\"],[\"flush-element\"],[\"text\",\"Start\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"jtk-node-type\",\"decision\"],[\"static-attr\",\"title\",\"Drag to add new\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"width\",\"100\"],[\"static-attr\",\"height\",\"100\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"rect\",[]],[\"static-attr\",\"y\",\"50\"],[\"static-attr\",\"x\",\"50\"],[\"static-attr\",\"width\",\"70\"],[\"static-attr\",\"height\",\"70\"],[\"static-attr\",\"transform\",\"rotate(45 110 25)\"],[\"static-attr\",\"fill\",\"white\"],[\"static-attr\",\"class\",\"outer\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"y\",\"5\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"rect\",[]],[\"static-attr\",\"width\",\"50\"],[\"static-attr\",\"height\",\"50\"],[\"static-attr\",\"transform\",\"rotate(45 15 65)\"],[\"static-attr\",\"fill\",\"white\"],[\"static-attr\",\"class\",\"inner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"text\",[]],[\"static-attr\",\"text-anchor\",\"middle\"],[\"static-attr\",\"x\",\"50\"],[\"static-attr\",\"y\",\"50\"],[\"static-attr\",\"dominant-baseline\",\"central\"],[\"flush-element\"],[\"text\",\"Decision\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"jtk-node-type\",\"process\"],[\"static-attr\",\"title\",\"Drag to add new\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"height\",\"100\"],[\"static-attr\",\"width\",\"100\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"rect\",[]],[\"static-attr\",\"width\",\"100\"],[\"static-attr\",\"height\",\"100\"],[\"static-attr\",\"fill\",\"white\"],[\"static-attr\",\"class\",\"outer\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"x\",\"10\"],[\"static-attr\",\"y\",\"10\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"rect\",[]],[\"static-attr\",\"width\",\"80\"],[\"static-attr\",\"height\",\"80\"],[\"static-attr\",\"fill\",\"white\"],[\"static-attr\",\"class\",\"inner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"text\",[]],[\"static-attr\",\"text-anchor\",\"middle\"],[\"static-attr\",\"x\",\"50\"],[\"static-attr\",\"y\",\"50\"],[\"static-attr\",\"dominant-baseline\",\"central\"],[\"flush-element\"],[\"text\",\"Process\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"jtk-node-type\",\"finish\"],[\"static-attr\",\"title\",\"Drag to add new\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"height\",\"100\"],[\"static-attr\",\"width\",\"100\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"circle\",[]],[\"static-attr\",\"cx\",\"50\"],[\"static-attr\",\"cy\",\"50\"],[\"static-attr\",\"r\",\"50\"],[\"static-attr\",\"stroke-width\",\"3\"],[\"static-attr\",\"fill\",\"white\"],[\"static-attr\",\"class\",\"outer\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"circle\",[]],[\"static-attr\",\"cx\",\"50\"],[\"static-attr\",\"cy\",\"50\"],[\"static-attr\",\"r\",\"40\"],[\"static-attr\",\"stroke-width\",\"3\"],[\"static-attr\",\"fill\",\"white\"],[\"static-attr\",\"class\",\"inner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"text\",[]],[\"static-attr\",\"text-anchor\",\"middle\"],[\"static-attr\",\"x\",\"50\"],[\"static-attr\",\"y\",\"50\"],[\"static-attr\",\"dominant-baseline\",\"central\"],[\"flush-element\"],[\"text\",\"Finish\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\\n\"],[\"comment\",\" this is the main drawing area \"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jtk-canvas\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"comment\",\" controls \"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"controls\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-arrows selected-mode\"],[\"static-attr\",\"mode\",\"pan\"],[\"static-attr\",\"title\",\"Pan Mode\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-pencil\"],[\"static-attr\",\"mode\",\"select\"],[\"static-attr\",\"title\",\"Select Mode\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-home\"],[\"static-attr\",\"reset\",\"\"],[\"static-attr\",\"title\",\"Zoom To Fit\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"comment\",\" miniview \"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"miniview\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/jsplumb-toolkit.hbs" } });
});
define("spaircorp-ui/templates/components/object-bin", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "m+7o/FOB", "block": "{\"statements\":[[\"block\",[\"draggable-object-target\"],null,[[\"action\"],[\"handleObjectDropped\"]],2]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"yield\",\"default\",[[\"get\",[\"obj\"]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"draggable-object\"],null,[[\"action\",\"content\"],[\"handleObjectDragged\",[\"get\",[\"obj\"]]]],0]],\"locals\":[\"obj\"]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"object-bin-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"name\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,1]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/object-bin.hbs" } });
});
define("spaircorp-ui/templates/components/script-instance", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FJQ2myX+", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"well\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"liquid-bind\"],[[\"get\",[\"currentNode\"]]],[[\"use\"],[\"toLeft\"]],2],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"pull-left\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-danger\"],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],[\"arg\",[\"onEnd\"]],[\"get\",[\"script\"]]],null],null],[\"flush-element\"],[\"text\",\"End\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"pull-right\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"canPressPreviousButton\"]]],null,1],[\"block\",[\"if\"],[[\"get\",[\"canPressNextButton\"]]],null,0],[\"close-element\"]],\"locals\":[],\"named\":[\"onEnd\"],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"dynamic-attr\",\"onClick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"advance\",[\"get\",[\"currentNode\"]]],null],null],[\"flush-element\"],[\"text\",\"Next\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-default\"],[\"dynamic-attr\",\"onClick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"goTo\",[\"get\",[\"previousNode\"]]],null],null],[\"flush-element\"],[\"text\",\"Back\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"log\"],[\"Rendering Process:\",[\"get\",[\"currentNode\"]]],null],false],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"padding: 5px\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"script-step\"],null,[[\"step\"],[[\"get\",[\"boundCurrentNode\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"boundCurrentNode\"]}],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/script-instance.hbs" } });
});
define("spaircorp-ui/templates/components/script-step", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4pZuyHBS", "block": "{\"statements\":[[\"append\",[\"helper\",[\"log\"],[\"Rendering Process:\",[\"get\",[\"step\"]]],null],false],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"lead\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"step\",\"text\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"step\",\"controls\"]]],null,17],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"radio\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"one-way-radio\"],[[\"get\",[\"control\",\"answer\"]]],[[\"option\",\"update\"],[[\"get\",[\"value\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"answer\"]]],null]],null]]]],false],[\"text\",\" \"],[\"append\",[\"get\",[\"value\"]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"value\"]},{\"statements\":[[\"block\",[\"each\"],[[\"helper\",[\"split\"],[[\"get\",[\"control\",\"options\"]]],[[\"separator\"],[\",\"]]]],null,0],[\"text\",\"    \"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"control\",\"controlType\"]],\"Radio\"],null]],null,1]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"checkbox\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"one-way-checkbox\"],[[\"get\",[\"control\",\"answer\"]]],[[\"option\",\"update\"],[[\"get\",[\"value\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"answer\"]]],null]],null]]]],false],[\"text\",\" \"],[\"append\",[\"get\",[\"value\"]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"value\"]},{\"statements\":[[\"block\",[\"each\"],[[\"helper\",[\"split\"],[[\"get\",[\"control\",\"options\"]]],[[\"separator\"],[\",\"]]]],null,3]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"control\",\"controlType\"]],\"Checkbox\"],null]],null,4,2]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"one-way-select\"],[[\"get\",[\"control\",\"answer\"]]],[[\"update\",\"options\",\"class\"],[[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"answer\"]]],null]],null],[\"helper\",[\"split\"],[[\"get\",[\"control\",\"options\"]]],[[\"separator\"],[\",\"]]],\"form-control\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"control\",\"controlType\"]],\"List\"],null]],null,6,5]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"input-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"input-group-addon\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-calendar\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"one-way-input\"],[[\"get\",[\"control\",\"answer\"]]],[[\"update\",\"class\",\"type\"],[[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"answer\"]]],null]],null],\"form-control\",\"date\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"control\",\"controlType\"]],\"Date\"],null]],null,8,7]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"input-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"input-group-addon\"],[\"flush-element\"],[\"text\",\"#\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"one-way-input\"],[[\"get\",[\"control\",\"answer\"]]],[[\"update\",\"class\",\"type\"],[[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"answer\"]]],null]],null],\"form-control\",\"number\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"control\",\"controlType\"]],\"Number\"],null]],null,10,9]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"input-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"input-group-addon\"],[\"flush-element\"],[\"text\",\"$\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"one-way-input\"],[[\"get\",[\"control\",\"answer\"]]],[[\"update\",\"class\",\"type\"],[[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"answer\"]]],null]],null],\"form-control\",\"number\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"control\",\"controlType\"]],\"Currency\"],null]],null,12,11]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"one-way-textarea\"],[[\"get\",[\"control\",\"answer\"]]],[[\"update\",\"class\",\"type\",\"rows\"],[[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"answer\"]]],null]],null],\"form-control\",\"text\",5]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"control\",\"controlType\"]],\"Textarea\"],null]],null,14,13]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"one-way-input\"],[[\"get\",[\"control\",\"answer\"]]],[[\"update\",\"class\",\"type\"],[[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"control\",\"answer\"]]],null]],null],\"form-control\",\"text\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"control-label\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"control\",\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"control\",\"controlType\"]],\"Textbox\"],null]],null,16,15],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"control\"]}],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/script-step.hbs" } });
});
define("spaircorp-ui/templates/components/side-menu-toggle", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "l8mUSypO", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"toggle-bars\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/side-menu-toggle.hbs" } });
});
define("spaircorp-ui/templates/components/side-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "m7dyUTXh", "block": "{\"statements\":[[\"yield\",\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/side-menu.hbs" } });
});
define("spaircorp-ui/templates/components/sortable-objects", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ss27zOoJ", "block": "{\"statements\":[[\"yield\",\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "spaircorp-ui/templates/components/sortable-objects.hbs" } });
});
define('spaircorp-ui/tests/mirage/mirage/config.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/config.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/config.js should pass ESLint.\n33:5  - Unexpected \'debugger\' statement. (no-debugger)');
  });
});
define('spaircorp-ui/tests/mirage/mirage/factories/script.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/factories/script.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/script.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/mirage/mirage/models/script.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/models/script.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/script.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/mirage/mirage/scenarios/default.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/scenarios/default.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/scenarios/default.js should pass ESLint.\n10:9  - \'script1\' is assigned a value but never used. (no-unused-vars)\n26:9  - \'script2\' is assigned a value but never used. (no-unused-vars)\n179:9  - \'script3\' is assigned a value but never used. (no-unused-vars)');
  });
});
define('spaircorp-ui/tests/mirage/mirage/serializers/script.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/serializers/script.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/script.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/transforms/raw', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Transform.extend({
    deserialize: function deserialize(serialized) {
      return serialized;
    },

    serialize: function serialize(deserialized) {
      return deserialized;
    }
  });
});
define('spaircorp-ui/transitions', ['exports'], function (exports) {
  exports['default'] = function () {

    this.transition(this.fromRoute('admin.scripts.edit.index'), this.toRoute('admin.scripts.edit.process-step'), this.use('toLeft'));

    //this.reverse('toRight')
    this.transition(this.fromRoute('admin.scripts.test'), this.toRoute('admin.scripts.edit'), this.use('fade'), this.reverse('fade'));

    /*
      this.transition(
        this.toRoute([function(routeName){ return true }, function(routeName){ return true }]),
        this.use('toLeft')
      );
    */
  };

  ;
});
define('spaircorp-ui/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('spaircorp-ui/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('spaircorp-ui/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('spaircorp-ui/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('spaircorp-ui/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('spaircorp-ui/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('spaircorp-ui/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('spaircorp-ui/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('spaircorp-ui/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('spaircorp-ui/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('spaircorp-ui/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('spaircorp-ui/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('spaircorp-ui/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('spaircorp-ui/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('spaircorp-ui/config/environment', ['ember'], function(Ember) {
  var prefix = 'spaircorp-ui';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("spaircorp-ui/app")["default"].create({"name":"spaircorp-ui","version":"0.0.0+2f733a45"});
}

/* jshint ignore:end */
//# sourceMappingURL=spaircorp-ui.map
