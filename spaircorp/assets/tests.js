'use strict';

define('spaircorp-ui/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/components/config-textarea-control.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/config-textarea-control.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/config-textarea-control.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/components/config-textbox-control.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/config-textbox-control.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/config-textbox-control.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/controllers/admin/scripts/edit.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/admin/scripts/edit.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/admin/scripts/edit.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
    server.shutdown();
  }
});
define('spaircorp-ui/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/helpers/ember-sortable/test-helpers', ['exports', 'ember-sortable/helpers/drag', 'ember-sortable/helpers/reorder'], function (exports, _emberSortableHelpersDrag, _emberSortableHelpersReorder) {});
define('spaircorp-ui/tests/helpers/fill-content-editable', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = function (app, selector, content) {
    return andThen(function () {
      return app.testHelpers.click(selector);
    }).then(function () {
      $(selector).html(content);
      return app.testHelpers.keyEvent(selector, 'keyup', 13);
    }).then(function () {
      return app.testHelpers.triggerEvent(selector, 'blur');
    });
  };
});
define('spaircorp-ui/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'spaircorp-ui/tests/helpers/start-app', 'spaircorp-ui/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _spaircorpUiTestsHelpersStartApp, _spaircorpUiTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _spaircorpUiTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _spaircorpUiTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('spaircorp-ui/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/helpers/register-helpers', ['exports', 'ember', 'spaircorp-ui/tests/helpers/fill-content-editable'], function (exports, _ember, _spaircorpUiTestsHelpersFillContentEditable) {
  var registerAsyncHelper = _ember['default'].Test.registerAsyncHelper;

  exports['default'] = function () {
    registerAsyncHelper('fillContentEditable', _spaircorpUiTestsHelpersFillContentEditable['default']);
  };
});
define('spaircorp-ui/tests/helpers/resolver', ['exports', 'spaircorp-ui/resolver', 'spaircorp-ui/config/environment'], function (exports, _spaircorpUiResolver, _spaircorpUiConfigEnvironment) {

  var resolver = _spaircorpUiResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _spaircorpUiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _spaircorpUiConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('spaircorp-ui/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/helpers/start-app', ['exports', 'ember', 'spaircorp-ui/app', 'spaircorp-ui/config/environment'], function (exports, _ember, _spaircorpUiApp, _spaircorpUiConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _spaircorpUiConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _spaircorpUiApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('spaircorp-ui/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/checkbox-control.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/checkbox-control.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/checkbox-control.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/connection.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/connection.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/connection.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/control.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/control.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/control.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/date-control.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/date-control.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/date-control.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/decision-step.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/decision-step.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/decision-step.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/finish-step.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/finish-step.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/finish-step.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/list-control.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/list-control.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/list-control.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/number-control.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/number-control.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/number-control.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/process-step.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/process-step.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/process-step.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/radio-control.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/radio-control.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/radio-control.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/script.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/script.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/script.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/start-step.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/start-step.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/start-step.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/step.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/step.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/step.js should pass ESLint.\n13:15  - \'Ember\' is not defined. (no-undef)\n17:13  - \'Ember\' is not defined. (no-undef)');
  });
});
define('spaircorp-ui/tests/models/textarea-control.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/textarea-control.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/textarea-control.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/models/textbox-control.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/textbox-control.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/textbox-control.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/routes/admin.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/admin.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/routes/admin/dashboard.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/admin/dashboard.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/dashboard.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/routes/admin/reports.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/admin/reports.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/reports.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/routes/admin/scripts.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/admin/scripts.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/scripts.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/routes/admin/scripts/edit.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/admin/scripts/edit.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/scripts/edit.js should pass ESLint.\n28:9  - \'bootbox\' is not defined. (no-undef)\n43:13  - Unexpected \'debugger\' statement. (no-debugger)\n73:35  - \'scope\' is assigned a value but never used. (no-unused-vars)\n73:42  - \'connection\' is assigned a value but never used. (no-unused-vars)\n73:54  - \'dropEndpoint\' is assigned a value but never used. (no-unused-vars)\n80:7  - Unexpected \'debugger\' statement. (no-debugger)\n91:13  - \'promise\' is assigned a value but never used. (no-unused-vars)\n129:27  - \'e\' is defined but never used. (no-unused-vars)\n130:7  - Unexpected \'debugger\' statement. (no-debugger)');
  });
});
define('spaircorp-ui/tests/routes/admin/scripts/edit/process-step/edit.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/admin/scripts/edit/process-step/edit.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/scripts/edit/process-step/edit.js should pass ESLint.\n16:9  - \'bootbox\' is not defined. (no-undef)');
  });
});
define('spaircorp-ui/tests/routes/admin/scripts/index.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/admin/scripts/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/scripts/index.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/routes/admin/scripts/new.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/admin/scripts/new.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/scripts/new.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/routes/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/routes/logout.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/logout.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/logout.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/test-helper', ['exports', 'spaircorp-ui/tests/helpers/resolver', 'ember-qunit'], function (exports, _spaircorpUiTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_spaircorpUiTestsHelpersResolver['default']);
});
define('spaircorp-ui/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/transitions.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - transitions.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'transitions.js should pass ESLint.\n8:3  - Parsing error: Unexpected token ) (null)');
  });
});
define('spaircorp-ui/tests/unit/models/checkbox-control-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('checkbox-control', 'Unit | Model | checkbox control', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/checkbox-control-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/checkbox-control-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/checkbox-control-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/connection-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('connection', 'Unit | Model | connection', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/connection-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/connection-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/connection-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/control-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('control', 'Unit | Model | control', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/control-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/control-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/control-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/date-control-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('date-control', 'Unit | Model | date control', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/date-control-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/date-control-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/date-control-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/decision-symbol-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('decision-symbol', 'Unit | Model | decision symbol', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/decision-symbol-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/decision-symbol-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/decision-symbol-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/diagram-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('diagram', 'Unit | Model | diagram', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/diagram-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/diagram-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/diagram-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/finish-symbol-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('finish-symbol', 'Unit | Model | finish symbol', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/finish-symbol-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/finish-symbol-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/finish-symbol-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/list-control-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('list-control', 'Unit | Model | list control', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/list-control-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/list-control-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/list-control-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/number-control-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('number-control', 'Unit | Model | number control', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/number-control-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/number-control-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/number-control-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/process-symbol-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('process-symbol', 'Unit | Model | process symbol', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/process-symbol-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/process-symbol-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/process-symbol-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/radio-control-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('radio-control', 'Unit | Model | radio control', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/radio-control-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/radio-control-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/radio-control-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/start-symbol-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('start-symbol', 'Unit | Model | start symbol', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/start-symbol-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/start-symbol-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/start-symbol-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/symbol-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('symbol', 'Unit | Model | symbol', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/symbol-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/symbol-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/symbol-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/textarea-control-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('textarea-control', 'Unit | Model | textarea control', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/textarea-control-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/textarea-control-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/textarea-control-test.js should pass ESLint.\n');
  });
});
define('spaircorp-ui/tests/unit/models/textbox-control-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('textbox-control', 'Unit | Model | textbox control', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spaircorp-ui/tests/unit/models/textbox-control-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/textbox-control-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/textbox-control-test.js should pass ESLint.\n');
  });
});
/* jshint ignore:start */

require('spaircorp-ui/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
