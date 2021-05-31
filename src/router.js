import Vue from "vue";
import Router from "vue-router";
// import jwt_decode from "jwt-decode";
// import store from "./store";
// import moment from "moment";
// import axios from "./axios"

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

let router = new Router({
  mode: "history",
  routes: [],
  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach(async () => {});

router.afterEach(() => {});

export default router;
