window.onload = function(){
  const url = location.search.substring(1).split('&');
  if(url.length>1){
    document.title = '';
    let tmp;
    for(let i=0; url[i]; i++) {
      tmp = url[i].split('=');
      drawing(tmp[0].slice(1), decodeURIComponent(tmp[1]));
    }
  }else{
    return;
  }
}


function diceroll(){
  document.title = '';
  document.getElementById('dice').textContent = '';
  let games = ["テラリア", "HoI4", "Civ5", "うさぎ"];
  let random;
  let query = {};
  for(let i=0; i<3; i++){
    random = games[Math.floor(Math.random() * games.length)];
    drawing(i+1, random);
    query[""+(i+1)+"希望："] = random;
    games = games.filter(n => n !== random);
  }
  window.history.pushState(
    null, 
    null, 
    location.pathname + '?' + $.param(query));  
}


function drawing(rank, game){
  document.getElementById("dice").insertAdjacentHTML(
    'beforeend', 
    "<p>第"+rank+"希望："+game+"</p>"
  );
  document.title += game;
}


function lineShare(){
  window.open(
    "https://line.me/R/msg/text/?"+document.title+'%0D%0A'+encodeURI(location.href),
    '_blank'
  );
}