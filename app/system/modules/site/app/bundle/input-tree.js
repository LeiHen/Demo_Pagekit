!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){var o,i;o=n(2),i=n(16),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},2:function(t,e){"use strict";t.exports={props:{trash:{type:Boolean,"default":!1},active:{type:Array,"default":function(){return[]}}},data:function(){return{menus:[],nodes:[],all:!0}},created:function(){this.all=!this.active||!this.active.length},watch:{active:function(t){this.all=!t||!t.length},all:function(t){t&&(this.active=[])}},ready:function(){var t=this;Vue.Promise.all([this.$http.get("api/site/node"),this.$http.get("api/site/menu")]).then(function(e){t.$set("nodes",e[0].data),t.$set("menus",t.trash?e[1].data:_.reject(e[1].data,"id","trash"))},function(){t.$notify("Could not load config.","danger")})},computed:{grouped:function(){return _(this.nodes).groupBy("menu").mapValues(function(t){return _(t||{}).sortBy("priority").groupBy("parent_id").value()}).value()}},partials:{"node-partial":'<li><label><input type="checkbox" :value="node.id" v-model="active" number> {{ node.title }}</label><ul class="uk-list" v-if="grouped[menu.id][node.id]"><partial name="node-partial" v-for="node in grouped[menu.id][node.id]"></partial></ul><li>'}},window.Vue.component("input-tree",function(e){e(t.exports)})},16:function(t,e){t.exports=' <label><input type=checkbox v-model=all> {{ \'All Pages\' | trans }}</label> <ul class="uk-list uk-margin-top-remove" v-for="menu in menus" v-if=menu.count> <li class=pk-list-header>{{ menu.label }}</li> <partial name=node-partial v-for="node in grouped[menu.id][0]"></partial> </ul> '}});