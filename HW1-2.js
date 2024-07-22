        // 2.運算子
        // a. 請用程式算出1天又10小時又17分又36秒，共等於幾秒
        let total;
        let day_sec=24*60*60;
        let hour_sec=60*60;
        let min_sec=60;
        total=1*day_sec+10*hour_sec+17*min_sec+36
        console.log("<2a>");
        console.log("1天又10小時又17分又36秒=" + total + "秒")

        // b. 請用程式算出93784秒，是幾天又幾小時又幾分又幾秒
        let sec=93784;
 
        let day=Math.floor(sec/day_sec); //天
        let day_remainder=sec%day_sec; //秒數餘數=93784秒/(24*3600秒)的餘數=>7384秒

        let hour=Math.floor(day_remainder/hour_sec); //小時
        let hour_remainder=day_remainder%hour_sec; //秒數餘數=7384秒/3600秒的餘數=>184秒

        let min=Math.floor(hour_remainder/min_sec); //分鐘
        let min_remainder=hour_remainder%min_sec;//秒數餘數=184秒/60秒的餘數=>4秒

        console.log("<2b>");
        console.log("93784秒是"+day+"天"+hour+"小時"+min+"分"+min_remainder+"秒");


        // c. 請用 變數 及 運算式 表示: 如果 有筆電 且 有網路，就可以在家工作
        let notebook=true;
        let net=true;
        let status=(notebook&&net)?"可以在家工作":"不可以在家工作";
        console.log("<2c>");
        console.log(status);

        // Reds 在寫JavaScript作業，電腦開機需要1分鐘，打開VS Code需要2分鐘，寫1題作業需要3分鐘，且 Reds 每天都會將電腦關機。
        // 李威廉分2天寫，第一天連續寫3題目，第二天連續寫2題，
        // 請用程式算出 Reds 共花多少時間
        const turnon=1;
        const openvs=2
        const hw=3
        let time=2*turnon+2*openvs+(3+2)*hw
        console.log("");
        console.log("Reds 共花"+time+"分鐘")

        // d. 請設計一程式，含有1個正整數變數n，可隨機印出一個介於1~n的整數
        // 提示1: 產生(偽)亂數
        // 以下程式，會回傳介於0~1 (可能為0，但不可能為1)的數
        // Math.random();
        // 提示2: 轉換成整數
        // 以下程式，會將value轉成整數並回傳
        // Math.trunc(value);
        function Rand(){
            let r=Math.trunc(Math.random()*100);
            return r;
        }
        console.log("<2d>");
        console.log(Rand());