//Client Script: 
function onLoad() { 
 
  var chgSysId = g_form.getUniqueValue(); 
 
  var ga = new GlideAjax('ChangeManagementRelatedRecords'); 
  ga.addParam('sysparm_name','getIncidentCount'); 
  ga.addParam('sysparm_change_id', chgSysId); 
  ga.getXML(GetRelatedIncidentCount); 
 
  function GetRelatedIncidentCount(response) { 
    var answer = response.responseXML.documentElement.getAttribute("answer"); 
    alert('Related Incidents: ' + answer); 
  } 
} 
 
 
//Script Include: 
var ChangeManagementRelatedRecords = Class.create(); 
ChangeManagementRelatedRecords.prototype = Object.extendsObject(AbstractAjaxProcessor, { 
    
getIncidentCount: function() { 
       var changeID = this.getParameter('sysparm_change_id'); 
   var incident = new GlideRecord('incident'); 
   incident.addQuery('rfc', changeID); 
   incident.query(); 
   return incident.getRowCount() 
   }, 
  
   _privateFunction: function() { // this function is not client callable      
  
   } 
  
}); 
