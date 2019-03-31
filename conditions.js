var convert=require('xml-js');

var xml1='<response><collectdtmf l="4"  o="5000" t="#"><playtext>Please enter 1 for Male or 2 for female followed by a #</playtext></collectdtmf></response>'
var result1=convert.xml2js(xml1, {compact: true, spaces: 4});

var xml2='<?xml version="1.0" encoding="UTF-8"?><Response><playtext>You are an adult</playtext><hangup/></Response>'
var result2=convert.xml2js(xml2, {compact: true, spaces: 4});

var xml3='<?xml version="1.0" encoding="UTF-8"?><Response><playtext>Minors are not allowed</playtext><hangup/></Response>'
var result3=convert.xml2js(xml3, {compact: true, spaces: 4});

var xml4='<response><collectdtmf l="4"  o="5000" t="#"><playtext>Please enter 1 if you are above 21 or 2 if not ,followed by a # </playtext></collectdtmf></response>'

var xml5='<response><collectdtmf l="4"  o="5000" t="#"><playtext>Please enter 1 if you are above 18 or 2 if not ,followed by a #</playtext></collectdtmf></response>'

var xml6='<?xml version="1.0" encoding="UTF-8"?><Response><playtext>Sorry wrong option pressed;Phone is going to Disconnect Now</playtext><hangup/></Response>'

var count=0;

var response1=function(req,res){
  console.log(req);
  if (req.query.event=='NewCall'){
    count=0;
    return xml1;
}
else if(req.query.data!=1 && req.query.data!=2)
{
  return xml6;
}

  else if (req.query.event=='GotDTMF' && count==0){

    if(req.query.data == 1 && count==0){
      count++;
      return xml4;
    }
    else if(req.query.data == 2 && count==0){
      count++;
      return xml5;
    }
  }


    else if (req.query.event=='GotDTMF' && count==1){
      if(req.query.data == 1 && count==1){
        count++;
        return xml2;
      }
      else if(req.query.data == 2 && count==1){
        count++;
        return xml3;
      }

    }


  }


module.exports.response1=response1;
