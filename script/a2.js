let tag_dict = {
  "#media": "Browse various forms of media.",
  "#home": "Confirm current objectives and weather.",
  "#apps": "View or launch apps in system memory."
};

let files = ["2b_hacking_complete.png","2b_realism.jpg","2b_scenery.png","2b_solo_violin.jpg","2b_sun.jpg","2b_violin.jpg","a2.png","nier_rest.png","yorha.jpg"];

let active = "#home";
let ac_app = "piracy";
let link_data;
let anime_data;
let api_key = "79331c2607776ffa0e71934a664e8cf2";
let city_code = "4060954";
let weather_data;
let birth_str = "1995/12/1";

function quote() {
  var quotes = [
    'お帰りなさい、<BR/>ご主人様',
    'トゥットゥルー♪',
    'エル・プサイ・コングルゥ',
    '宇宙には始まりはあるが、<BR/>終わりはない',
    '何でもは知らないわよ、<BR/>知ってることだけ',
    '僕はキメ顔でそう言った',
    '私気になります',
    'やれやれだぜ',
    'お可愛いこと',
    '失礼、噛みました',
    'にゃんぱす～',
    '黒蜥蜴星から来たの'
  ];
  var re_quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').innerHTML = re_quote;
}

function add_zero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function get_age() {
  var cur = new Date();
  var bd = new Date(birth_str);
  var calculateYear = cur.getFullYear();
  var calculateMonth = cur.getMonth();
  var calculateDay = cur.getDate();

  var birthYear = bd.getFullYear();
  var birthMonth = bd.getMonth();
  var birthDay = bd.getDate();

  var age = calculateYear - birthYear;
  var ageMonth = calculateMonth - birthMonth;
  var ageDay = calculateDay - birthDay;

  if (ageMonth < 0 || (ageMonth == 0 && ageDay < 0)) {
      age = parseInt(age) - 1;
  }
  document.getElementById("level-lvl").innerHTML = "Lv: " + age;
}

function get_weather() {
  let url = "https://api.openweathermap.org/data/2.5/weather?id=" + city_code + "&units=metric" 
    + "&lang=ja" + "&APPID=" + api_key;
  $.get(url, function(data) {
    var temp_min = Math.round(data["main"]["temp_min"]) + "°C";
    var temp_max = Math.round(data["main"]["temp_max"]) + "°C";
    var cur_temp = Math.round(data["main"]["temp"]) + "°C";
    var condition = data["weather"]["0"]["description"];
    var date = new Date();
    date.setHours(date.getHours() - 6);
    var time = add_zero(date.getHours()) + ":" + add_zero(date.getMinutes());
    weather_data = ["予報", temp_max, temp_min, condition, cur_temp, time];
    var node = document.getElementById("wth-lst-2");
    while(node.lastChild) {
      node.removeChild(node.lastChild);
    }
    for(let i = 0; i < weather_data.length; i++) {
      let $list_item = $("<li>" + weather_data[i] + "</li>");
      $("#wth-lst-2").append($list_item);
    }
  });
}

function get_art() {
  let art_num = Math.floor(Math.random() * (files.length));
  let file_name = files[art_num];
  $("#art").css("background-image", "url('img/art/" + file_name + "')");
  document.getElementById("art-span").innerHTML = file_name;
}

function get_nihon_date() {
  var date = new Date();
  date.setHours(date.getHours() - 6);
  var month = date.toLocaleDateString('ja-JP', {month: 'long'});
  var day = date.toLocaleDateString('ja-JP', {day: 'numeric'});
  var weekday = date.toLocaleDateString('ja-JP', {weekday: 'long'});

  var dt_str = weekday.concat(', ').concat(month).concat(' ').concat(day);
  document.getElementById('date').innerHTML = dt_str;
}

function load_links(cat) {
  remove_selection(active);
  active = cat;
  var links = link_data[active]["links"];
  for (let i = 0; i < links.length; i++) {
    var mem_str = "list-mem-" + (i + 1);
    var member = document.getElementById(mem_str);
    member.href = links[i]["url"];
    member.innerHTML = links[i]["item"];
  }
  $(cat).addClass("title-box-selected");
  $(cat.concat("-span")).css("color","var(--light)");

  let page_title = cat.replace("#", "").toUpperCase();
  document.getElementById("page-title").innerHTML = page_title;

  let vis_str = cat.replace("#",".") + "-visible";
  $(vis_str).css("display", "block");
  lightify(cat);
  set_tag();
}

function load_anime(anime_data) {
  var cur = new Date();
  cur.setHours(cur.getHours() - 6);
  var day = cur.getDay();
  var airing = anime_data[day];
  var str = "今日、";
  if (airing.length == 0) {
    str = "無";
  } else if (airing.length < 2) {
    str += "「" + airing[0] + "」は放映しています。";
  } else {
    for (let i = 0; i < airing.length - 1; i++) {
      str += "「" + airing[i] + "」と";
    }
    str += "「" + airing[airing.length - 1] + "」は放映しています。";
  }
  document.getElementById("airing-span").textContent = str;
}

function load_apps(cat) {
  var links = link_data[cat]["links"];
  var name = link_data[cat]["name"];
  document.getElementById("apps-drawer-span").innerHTML = name;

  for (let i = 0; i < 6; i++) {
    var app_pre = "slot-" + (i + 1);
    var app_name = app_pre + "-title";
    var app_title = document.getElementById(app_name);
    app_title.innerHTML = app_title.innerHTML.slice(app_title.innerHTML.indexOf("Slot"));
    app_title.innerHTML = name + ": " + app_title.innerHTML;
  }

  for (let i = 0; i < 6; i++) {
    var app_pre = "slot-" + (i + 1);
    var app_lnk = app_pre + "-link";
    var app_cnt = app_pre + "-content-span";
    document.getElementById(app_lnk).href = "";
    document.getElementById(app_cnt).textContent = "Empty";
  }
  for (let i = 0; i < links.length; i++) {
    var app_pre = "slot-" + (i + 1);
    var app_lnk = app_pre + "-link";
    var app_cnt = app_pre + "-content-span";
    document.getElementById(app_lnk).href = links[i]["url"];
    document.getElementById(app_cnt).textContent = links[i]["item"];
  }
}

function get_favorites() {
  $.get("api/getFavorites", function(data) {
    link_data = JSON.parse(data);
    load_links(active);
    load_apps(ac_app);
  });
}

function get_anime() {
  $.get("api/getAiring", function(data) {
    anime_data = JSON.parse(data);
    load_anime(anime_data);
  });
}

function remove_selection(title) {
  var span = title.concat("-span");
  $(span).css("color","var(--dark)");
  $(title).parent().css("border", '');
  $(title).removeClass("title-box-selected");
  let vis_str = title.replace("#",".") + "-visible";
  $(vis_str).css("display", "none");
  darkify(title);
}

function set_tag() {
  $("#tag-content").html(tag_dict[active]);
}

function lightify(title) {
  let img_str = title.concat("-img").replace("#","");
  let img_name = "img/".concat(title).concat("_light.png").replace("#","");
  document.getElementById(img_str).src = img_name;
}

function darkify(title) {
  let img_str = title.concat("-img").replace("#","");
  let img_name = "img/".concat(title).concat("_dark.png").replace("#","");
  document.getElementById(img_str).src = img_name;
}

$(document).ready(function () {
  $(".title-box").hover(function() {
    var cur = "#" + $(this).prop('id');
    if (active == cur) {
      $(this).parent().css("border","0");
    }
    lightify(cur);
    $(cur + "-span").css("color","var(--light)");
  }, function() {
    var cur = "#" + $(this).prop('id');
    if (active != cur) {
      darkify(cur);
      $(cur + "-span").css("color","var(--dark)");
    }
  });
  $(".title-box").click(function() {
    $(this).parent().css("border","0");
    load_links("#" + $(this).prop('id'));
  });
  $("#weather-container").click(function() {
    get_weather();
  });
  $("#art-container").click(function() {
    get_art();
  });
  $(".app-mem").click(function() {
    load_apps($(this).prop('id'));
  });

  get_nihon_date();
  quote();
  get_age();
  get_anime();
  get_favorites();
  get_art();
  get_weather();
});
