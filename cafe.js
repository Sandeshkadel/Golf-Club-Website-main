var crsr = document.getElementById("cursor");
var blur = document.getElementById("cursor-blur");
document.addEventListener("mousemove", function (dets) {
  //  alert(crsr)
  (crsr.style.left = dets.x + 30 + "px"),
    (crsr.style.top = dets.y + "px"),
    (blur.style.left = dets.x - 250 + "px"),
    (blur.style.top = dets.y - 250 + "px");
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "13.82vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
  delay: 1,
});

var h4all = document.querySelectorAll("#nav a");

h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

// Page 3 hovering & clicking effect of menu
var menuItems = document.getElementsByClassName("Menu_data_items");
var clicked_id;
var add_data = document.getElementById('menu_data_card');
function menu_item_clicked(object) {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].style.color = "white";
    menuItems[i].style.textDecoration = "none";
  }
  object.style.color = "#95c11e";
  object.style.textDecoration = "underline";
  object.style.textDecorationColor = "#95c11e";
  clicked_id = object.id;
  // console.log(`Clicked id name:${clicked_id} and it's type:${typeof clicked_id}`)
  if (clicked_id == 'm1') {
    add_data.innerHTML =
      `<div id="m1">
    <div id="menu_details">
        <h2>BREAKFASTS</h2>
        <p>Served All Day</p>
        <hr>
        <h4>ENGLISH BREAKFAST BAGUETTE <span>RS:-10.00</span></h4>
        <h4>VEGGIE BREAKFAST BAGUETTE <span>RS:-7.50</span></h4>
        <h4>BACON BAGUETTE <span>RS:-6.00</span></h4>
        <h4>SAUSAGE BAGUETTE <span>RS:-6.00</span></h4>

    </div>
    <div id="menu_images"></div>
</div>`;
  }
  else if (clicked_id == 'm2') {
    add_data.innerHTML =
      `<div id="m2">
                    <div id="menu_details1">
                        <h2>BAGUETTES & WRAPS</h2>
                        <hr>
                        <h4>FISH GOUJON WRAP <span>RS:-9.50</span></h4>
                        <h4>HALLOUMI WRAP <span>RS:-9.50</span></h4>
                        <h4>SOUTHERN FRIED CHICKEN WRAP <span>RS:-9.50</span></h4>
                        <h4>CHEESE & HAM BAGUETTE <span>RS:-7.75</span></h4>
                        <h4>HAM BAGUETTE <span>RS:-7.50</span></h4>
                        <h4>TUNA CRUNCH BAGUETTE <span>RS:-7.25</span></h4>
                        <h4>CHICKEN MAYO BAGUETTE <span>RS:-7.00</span></h4>
                        <h4>CHEESE BAGUETTE <span>RS:-7.00</span></h4>
                        <P>All served with fries and side salad.</P>
                    </div>
                    <div id="menu_details2">
                        <h2>BURGERS</h2>
                        <hr>
                        <h4>BACON CHEESEBURGER <span>RS:-10.75</span></h4>
                        <h4>CHEESEBURGER <span>RS:-10.00</span></h4>
                        <h4>SOUTHERN FRIED CHICKEN BURGER <span>RS:-9.75</span></h4>
                        <h4>CLASSIC BURGER <span>RS:-9.50</span></h4>
                        <h4>MOVING MOUNTAINS VEGAN BURGER <span>RS:-10.75</span></h4>
                        <p>All burgers are served with fries & side salad.</p>
                    </div>
                    <div id="menu_details3">
                        <h2>KIDS MEALS</h2>
                        <hr>
                        <h4>CHICKEN GOUJONS <span>RS:-6.00</span></h4>
                        <h4>FISH GOUJONS <span>RS:-6.00</span></h4>
                        <h4>KIDS MARGHERITA <span>RS:-6.00</span></h4>
                        <p>Choose a drink: water, apple juice or orange juice.</p>
                        <div id="menu2_image"></div>
                    </div>
                </div>`;
  }
  else if (clicked_id == 'm3') {
    add_data.innerHTML=
    `<div id="m3">
    <div id="menu_details">
        <h2>SHARING PLATES</h2>
        <hr>
        <h4>10 CHICKEN WINGS <span>RS:-10.00</span></h4>
        <h4>5 CHICKEN WINGS <span>RS:-6.00</span></h4>
        <h4>5 BUTTERMILK CHICKEN STRIPS <span>RS:-8.00</span></h4>
        <h4>3 BUTTERMILK CHICKEN STRIPS <span>RS:-5.50</span></h4>
        <h4>NACHOS <span>RS:-8.50</span></h4>
        <h4>CHEESE & BACON FRIES <span>RS:-6.25</span></h4>
        <h4>LOADED CHEESY FRIES <span>RS:-6.00</span></h4>
        <h4>JUST FRIES <span>RS:-4.00</span></h4>
        <h4>CHEESY GARLIC CIABATTA <span>RS:-4.00</span></h4>
        <h4>GARLIC BREAD <span>RS:-3.00</span></h4>
    </div>
    <div id="menu_images"></div>
</div>`;
  }
  else if (clicked_id == 'm4') {
    add_data.innerHTML=
    `<div id="m4">
    <div id="menu_details1">
        <h2>HOT DRINKS</h2>
        <hr>
        <h4>HOT CHOCOLATE <span>RS:-3.75</span></h4>
        <h4>LATTE <span>RS:-3.50</span></h4>
        <h4>CAPPUCCINO <span>RS:-3.50</span></h4>
        <h4>AMERICANO <span>RS:-3.00</span></h4>
        <h4>HERBAL TEA <span>RS:-2.25</span></h4>
        <h4>TEA <span>RS:-2.00</span></h4>
    </div>
    <div id="menu_details2">
        <h2>SOFT DRINKS</h2>
        <hr>
        <h4>OASIS (SUMMER FRUITS/CITRUS) <span>RS:-3.00</span></h4>
        <h4>COKE <span>RS:-2.50</span></h4>
        <h4>DIET COKE <span>RS:-2.25</span></h4>
        <h4>FANTA ORANGE <span>RS:-2.50</span></h4>
        <h4>SPRITE <span>RS:-2.50</span></h4>
        <h4>STILL WATER <span>RS:-2.00</span></h4>
        <h4>SPARKLING WATER <span>RS:-2.00</span></h4>
        <h4>ORANGE/APPLE JUICE CARTON <span>RS:-2.00</span></h4>
    </div>
    <div id="menu_details3">
        <h2>BEER & CIDER</h2>
        <hr>
        <h4>HEINEKEN 5% <span>RS:-6.00</span></h4>
        <h4>FOSTERS 4% <span>RS:-5.00</span></h4>
        <h4>INCH’S 4.5% <span>RS:-5.00</span></h4>
        <div id="menu2_image"></div>
    </div>
</div>`;
  }
}

function moushover(obj) {
  for (let i = 0; i < menuItems.length; i++) {
    if (clicked_id != null && obj.id != clicked_id) {
      obj.style.textDecoration = "underline";
      obj.style.textDecorationColor = "#95c11e";
    }
    if (clicked_id == null && obj.id == menuItems[i].id) {
      obj.style.textDecoration = "underline";
      obj.style.textDecorationColor = "#95c11e";
    }
  }
}

function mouse_out(obj) {
  for (let i = 0; i < menuItems.length; i++) {
    if (clicked_id == obj.id) {
    }
    else if (clicked_id != 'undefined' && menuItems[i].id != clicked_id) {
      obj.style.textDecoration = "none";
    }
    else if (clicked_id == 'undefined' && obj.id == menuItems[i].id) {
      obj.style.textDecoration = "none";
    }
  }
}


let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 0) {
      scrollProgress.style.display = "grid";
  } else {
      scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.addEventListener('scroll', calcScrollValue);
window.addEventListener('load', calcScrollValue);
