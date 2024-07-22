        // 4.陣列
        // a.
        // 請宣告一個陣列，並利用Math.random()產生5個範圍為0~9的整數值給每個元素，且每個值不可重複

        let arr=[];
        function randomInt(){ //範圍0~9的元素
            let x=Math.trunc(Math.random()*10);
            return x;
        }
        let c=0
        while(c>=0){
            let element=randomInt();
            if(arr.indexOf(element)==-1){
                arr.push(element);
            }
            if(arr.length>=5)
                break;
        }
        
        console.log("<4a>");
        console.log("陣列元素:")
        for(j=0;j<arr.length;j++){
            console.log(arr[j]);
        }


        // b.
        // (續上題) 請印出陣列所有元素的總和、平均值
        let sum1=0;
        for(j=0;j<arr.length;j++){
            sum1=sum1+arr[j];
        }
        let avg=sum1/arr.length;
        console.log("<4b>");
        console.log("總和="+sum1);
        console.log("平均="+avg);
        // c.
        // (續上題) 請將陣列排序，若有陣列元素之值等於平均值，印出該元素的索引
        // 否則，找出平均值介於哪兩個元素值之間，印出該兩個元素的索引

        console.log("<4c>")

        //排序陣列
        arr.sort(function(a, b) {
            return a - b;
        })

        //印出排序後陣列
        console.log("排序後陣列:");
        for(i=0;i<arr.length;i++){
            console.log(arr[i]);
        }

        //判斷與平均值比較
        let smaller=[]; 

        if(arr.indexOf(avg)>-1){ //等於平均值
            console.log(avg+"等於平均值，該元素索引:"+arr.indexOf(avg)); 
        }
        else{
            for(j=0;j<arr.length;j++){
                if(arr[j]<avg){
                    smaller.push(arr[j]); //找出小於平均的數值
                }
            }
            let max=Math.max(...smaller); //找出小於平均數中的最大值
            let idx1=arr.indexOf(max);
            let idx2=idx1+1;
            console.log("平均值介於索引"+idx1+"和"+idx2+"之間");
        }
  


        // d.
        // 有一字串陣列內容如下
        // >  const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
        // > 

        // 請統計並印出陣列內每個字母各有幾個，EX:
        // a: 4
        // c: 2

        
        console.log("<4d>");

        const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];


        let str=mySkills.join(''); //合併成字串
    
        let arrChar=[];
        for(i=0;i<str.length;i++){
            if(arrChar.indexOf(str[i])==-1){  
                arrChar.push(str[i]);       //找出mySkills不重複的字元
            }
            else
                continue;
        }
        arrChar.sort(); //排序
        
    
        
        let count=0; //次數
        for(i=0;i<arrChar.length;i++){
            for(j=0;j<str.length;j++){
                if(arrChar[i]==str[j]){
                    count+=1;
                }
            }
            console.log(arrChar[i]+":"+count); //印出字串中各字元出現次數
            count=0;
        }

        

        // e.
        // 請宣告一個二維陣列，並用巢狀for迴圈將值放入陣列內。結果如下:
        //     [
        //         [ 18, 27, 36, 45, 54, 63, 72, 81 ],
        //         [ 16, 24, 32, 40, 48, 56, 64 ],
        //         [ 14, 21, 28, 35, 42, 49 ],
        //         [ 12, 18, 24, 30, 36 ],
        //         [ 10, 15, 20, 25 ],
        //         [ 8, 12, 16 ],
        //         [ 6, 9 ],
        //         [ 4 ]
        //     ]
        console.log("<4e>");
        let a=9; //a=9,a>=2
        let b=2; //b=2,b<=a
        let nestedArray=[];
        for(a=9;a>=2;a--){  //列
            let innerArray=[];
            for (b=2;b<=a;b++){  //欄
                innerArray.push(a*b);   
            }
            nestedArray.push(innerArray);
      
            b=2;
            chars=[];
         }
           
         console.log(nestedArray);
     