Vue.component('menu-block', {
   data(){
      return {
      menuList: [
         { url: "#", name: "меню1" },
         { url: "#", name: "меню2" },
         { url: "#", name: "меню3" },
      ],
      }
   },
   template: `
        <nav>
            <ul id="menu">
                <li class="list" v-for="list in menuList">
                    <a class="menu__link"
                    :href="list.url"
                    :title="list.name"
                    >{{ list.name }}</a>
                </li>
            </ul>
        </nav>
   `
});