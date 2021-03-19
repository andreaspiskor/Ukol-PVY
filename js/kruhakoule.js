$(function(){
    let kruh = {
        polomer: 10,
        getPrumer: function(){
            let prumer = this.polomer * 2;
            return prumer;
        },
        getObvod: function(){
            let obvod = this.polomer * 2 * Math.PI;
            return obvod;
        },
        getPlocha: function(){
            let plocha = Math.pow(this.polomer,2) * Math.PI;
            return plocha;
        },
        result: function(){
            console.log(kruh.getPrumer());
            console.log(kruh.getObvod());
            console.log(kruh.getPlocha());
            let vysledek = `Prumer kruhu je ${kruh.getPrumer()} cm<br>
            Obvod kruhu je ${kruh.getObvod().toFixed(2)} cm<br> 
            Plocha kruhu je ${kruh.getPlocha().toFixed(2)} cm²`;
            return vysledek;
        },
    }
    let koule = {
        polomer: 10,
        getObjem: function(){
            let objem = Math.pow(this.polomer,3) * Math.PI *(4/3);
            return objem;
        },
        getPovrch: function(){
            let povrch = Math.pow(this.polomer,2) * Math.PI * 4;
            return povrch;
        },
        result: function(){
            console.log(koule.getObjem());
            console.log(koule.getPovrch());
            let vysledek = `Povrch koule je ${koule.getPovrch().toFixed(2)} cm²<br>
            Objem koule je ${koule.getObjem().toFixed(2)} cm³`;            
            return vysledek;
        },
    }

    $("#calc1").on("click", function(){
        kruh.polomer = ($("#polomerkruhu").val());
        $("#vysledek1").html(kruh.result());
    })

    $("#calc2").on("click", function(){
        koule.polomer = ($("#polomerkoule").val());
        $("#vysledek2").html(koule.result());
    })
})