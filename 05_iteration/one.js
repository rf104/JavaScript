///for

for(let i = 0;i<=10;i++)
    {
        const emlement = i;
        //console.log(emlement);
    }

for(let i = 1;i<=10;i++)
    {
        //console.log(`Table of ${i}`);
        for(let j = 1;j<=10;j++)
            {
                //console.log(`${i} * ${j} = ${i*j}\n`);
            }
    }
    
    for(let i = 1;i<10;i++)
        {
            if(i==7){
                console.log("Thala for a reason!!");
                //break ; if break occur then it will end the loop here..
                continue /// it will stop for this perticular i then it will work rest of his loop
            }
            console.log(`Value of i is ${i}`);

            
        }