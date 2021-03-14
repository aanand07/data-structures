var lengthOfLongestSubstring = function(s) {
    let k=0, i=0, str='', max='';
    while(i<s.length){
      if(!str.includes(s[i])){
        str+=s[i];
      }else{
        str=s[k+1];
        i=k+1;
        k=i;
      }
      i++;
      if(str.length>max.length) max=str;
    }
    return max.length;
  };

  console.log(lengthOfLongestSubstring('abcabcbbv'))