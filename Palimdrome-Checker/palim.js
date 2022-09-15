const btncheck=document.querySelector("button");
const str=document.querySelector("input");

btncheck.addEventListener("click" , (e)=>{
    e.preventDefault();
    const inputword=str.value.toLocaleLowerCase();
    const string = inputword.split("");
    const rearray=string.reverse();
    const joinarray=rearray.join("");
    if(inputword==joinarray)
    {
        document.querySelector(".output-text").innerHTML=`<div>
        <p style="font-size: 18px; font-weight:bolder;text-align:center;padding-top:10%;">${inputword}=${joinarray} </p>
        <div class="wrapper">
                        <div class="typing-demo">
                         It is palimdrome.</span> 
                        </div>
                    </div>
        <p style="font-size: 18px; font-weight:bolder;text-align:center;"></p>
        </div>`;
        str.value=""}

    if(inputword!=joinarray)
        {
            document.querySelector(".output-text").innerHTML=`<div>
            <p style="font-size: 18px; font-weight:bolder;text-align:center; padding-top:10%;">
            <input type="text" class="result" disabled"/></p>
            <div class="wrapper">
                        <div class="typing-demo">
                          It is not palimdrome.</span> 
                        </div>
                    </div>`;
            document.querySelector(".result").value=`${inputword}=${joinarray}`;
            str.value=""}

    // else
    // {
    //         document.querySelector(".output-text").innerHTML=`<div>
            
    //         <p style="font-size: 18px;font-weight:bolder;text-align:center;">Enter Some String!!!</p>
    //         </div>`;
    //         str.value="";   
    // }
}
);
