function talk() {
  var know = {
    Hallo: "Hi , hallo",
    hallo: "hallo",
    Hi: "Hallo",
    hai: "hai",
    Assalamualaikum: "Waalaikumsalam",
    assalamualaikum: "Walaikumsalam",
    "Apa Kabar?": "Baik !",
    "apa kabar?": "Baik!",
    "bagaimana keadaan mu?": "Saya baik!",
    "selamat pagi": "Selamat pagi :)",
    "selamat siang": "Selamat siang :)",
    "selamat sore": "Selamat sore :)",
    "selamat malam": "Selamat malam :)",
    "bagaimana dengan hari harimu?": "Good!!!.",
    "apakah aku ganteng?": "Belum tentu ngab.",
    "apakah kamu sedang kelaparan?": "Ngapain aku kelaparan, aku aja AI.",
    "nama pembuat aplikasi ini siapa?":
      "Base code nya dari yasir nahari, di edit oleh MDA Web.",
    "MDA Web itu siapa?":
      "Dia adalah Web Development yang mengedit Apk ChatBot ini",
    "apakah kamu tau akun github nya?": "Namanya adalah MDACreative",
    "mau skincare": "Y tar gw beliin!, tapi mau yg mana?",
    "mau g2g sama skintific": "brp duit?",
    "100 rebu": "bot ga punya duit",
    bodo: "ya udh gw ga beliin",
  };
  var user = document.getElementById("userBox").value;
  document.getElementById("chatLog").innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatLog").innerHTML = "Saya Gak Paham.";
  }
}
