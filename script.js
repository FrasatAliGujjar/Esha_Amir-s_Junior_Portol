function eawhatsapp() {

    let url = "http://wa.me/923021868160?text="

        + "*Asslam-o-Alaikum !*" + "%0a"
        + " " + "%0a"
        + "*Mam ! Esha Amir Magrey*" + "%0a"
        + " " + "%0a"
        + "*This is my intro*" + "%0a"
        + "---------------------" + "%0a"
        + " " + "%0a"
        + "*Name :*" + " " + document.getElementById('name').value + "%0a"
        + "*Cast :*" + " " + document.getElementById('cast').value + "%0a"
        + "*Batch :*" + " " + document.getElementById('batch').value + "%0a"
        + "*Class :*" + " " + document.getElementById('class').value + "%0a"
        + "*Department :*" + " " + document.getElementById('dp').value + "%0a"
        + "*Area :*" + " " + document.getElementById('area').value + "%0a"
        + " " + "%0a"
        + "---------------------" + "%0a"
        + " " + "%0a"
        + "*Contact Title*" + "%0a"
        + document.getElementById('batch').value + "-" + document.getElementById('name').value + "-" + document.getElementById('cast').value + "-" + "(" + document.getElementById('class').value + ")" + "-" + document.getElementById('area').value + "%0a"


    window.open(url, "_blank");

}

