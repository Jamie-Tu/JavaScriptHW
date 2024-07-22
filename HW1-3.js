        // 3.流程控制
        // a.
        // 有1個正整數n，並印出1~n之內，3的倍數和4的倍數的總和
        console.log("<3a>");
        function multiple_3_4(n){
            let sum=0;
            for(let i=1;i<=n;i++){
            if(i%3==0||i%4==0){
                sum+=i;
             }
            }
            return sum;
        }
        
        let n=10; //輸入n
        let n_sum=multiple_3_4(n);
        console.log("1~"+n+"之間3的倍數和4的倍數的總和="+n_sum);

        
        // b.
        // 請用迴圈印出以下內容
        
        // 18 27 36 45 54 63 72 81
        // 16 24 32 40 48 56 64
        // 14 21 28 35 42 49
        // 12 18 24 30 36
        // 10 15 20 25
        // 8  12 16
        // 6  9
        // 4


        console.log("<3b>");
        let a=9; //a=9,a>=2
        let b=2; //b=2,b<=a
        let result=0;
        for(a=9;a>=2;a--){  //列
            for (b=2;b<=a;b++){  //欄
                result=result+a*b+" "
            }
            console.log(result);
            b=2;
            result="";
        }
        


        // c.
        // 請用迴圈印出以下內容..
        
        // 2 5 8 11 14 17 20 23 26 29 32
        console.log("<3c>");
        for(let i=2;i<=32;i+=3)
        { 
            console.log(i);         
        }

        // d.
        // 請設計一程式，含有1個正整數變數n，並印出1~n所有質數的總和
      
        let isPrime=function(num){ 
            if(num==1){
                return false;
            }   
            for(i=2;i<num;i++)
            {
                if(num%i==0){
                    return false;
                }
                
            }
            return true;  
        }


        function addPrime(n){
            let sum=0;
            for(i=1;i<=n;i++){ //1~n整數
                if(isPrime(i)){
                    sum=sum+i;
                }
            }

            return sum;
        }
        let number=4;
        let ans=addPrime(number); //輸入正整數n
        console.log("<3d>");
        console.log(number+"以下質數總和="+ans);
                
   


        // e.
        // 請設計一程式，含有2個正整數變數year(年)、month(月)，印出該年該月有幾天
        // *註: 需考慮閏年
        // https://zh.wikipedia.org/wiki/闰年
        // 闰年
        // 閏年是指該年有366日，即較平常年份多出一日。閏年是為了彌補因人為曆法規定的年度天數365日和平均回歸年的大約365.24219日的差距而設立的。不同曆法有不同置閏方法。儒略曆每4年置1閏日，平均1年是365.25日。格里高利曆每400年少3次閏日，平均是365.2425日。多出來的一天為2月29日。
        function toDay(year,month){
        
            switch(month){
            case 1:
                    console.log(year+"年"+month+"月是31天");
                    break;
            case 2:
                    if(year%400==0){ //年份為400的倍數
                            console.log(year+"年"+month+"月是29天");    
                        }
                        else{
                            if(year%4==0 && year%100!=0){ //4的倍數且非100倍數
                            console.log(year+"年"+month+"月是29天");    
                            }
                            else{
                             console.log(year+"年"+month+"月是28天"); 
                            }
                        }        
            
                     break;
            case 3:
                     console.log(year+"年"+month+"月是31天");
                     break;
            case 4:
                     console.log(year+"年"+month+"月是30天");
                     break;
            case 5:
                     console.log(year+"年"+month+"月是31天");
                     break;
            case 6:
                     console.log(year+"年"+month+"月是30天");
                     break;
            case 7:
                     console.log(year+"年"+month+"月是31天");
                     break;
            case 8:
                     console.log(year+"年"+month+"月是31天");
                     break;
            case 9:
                     console.log(year+"年"+month+"月是30天");
                     break;
            case 10:
                     console.log(year+"年"+month+"月是31天");
                     break;
            case 11:
                     console.log(year+"年"+month+"月是30天");
                     break;
            case 12:
                     console.log(year+"年"+month+"月是31天");
                     break;
                
            }
    }
        console.log("<3e>");
        toDay(2000,5);   