$(function(){
  var Model = Backbone.Model.extend({
    defaults: {
      foo: (new Date()).getTime()
    }
  });

  var View1 = Backbone.View.extend({
    bindings: {
      '.foo': 'foo'
    },
    render: function() {
      this.$el.html('View1: h1 h2 <br> <h1 class="foo"></h1><h2 class="foo"></h2>');
      this.stickit();
      return this;
    }
  });

  var View2 = Backbone.View.extend({
    bindings: {
      '.foo': 'foo'
    },
    render: function() {
      this.$el.html('View 2: input <br> <input type="text" class="foo">');
      this.stickit();
      return this;
    }
  });

  var View3 = Backbone.View.extend({
    bindings: {
      '.foo': 'foo'
    },
    render: function() {
      this.$el.html('View 3: h1 input h3h2 <br> <h1 class="foo"></h1><input type="text" class="foo"><h2 class="foo"></h2>');
      this.stickit();
      return this;
    }
  });

  var model = new Model();
  var view1 = new View1({
    model: model
  });
  var view2 = new View2({
    model: model
  });
  var view3 = new View3({
    model: model
  });

  $('#main').append(view1.render().el);
  $('#main').append($('<hr>'));
  $('#main').append(view2.render().el);
  $('#main').append($('<hr>'));
  $('#main').append(view3.render().el);
  $('#main').append($('<hr>'));

  $('button').click(function() {
    model.set('foo', (new Date().getTime()));
  });
});
