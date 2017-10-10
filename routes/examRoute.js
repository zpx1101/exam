var express = require('express');
var route = express.Router();
var examDB = require('../db/examDB');

route.get('/getAllSubjectType',(req,resp)=>{
	examDB.getAllSubjectType().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
route.get('/getAllSubjectLevel',(req,resp)=>{
	examDB.getAllSubjectLevel().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
route.get('/getAllDepartments',(req,resp)=>{
	examDB.getAllDepartments().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
route.get('/getAllTopics',(req,resp)=>{
	examDB.getAllTopics().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});

route.post('/getAllSubjects',(req,resp)=>{
	var ids = newArr(req.body['ids[]']);
	// console.log(ids);
	// console.log(req.body);
	examDB.getAllSubjects(ids).then((data)=>{
		// console.log(data);
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//审核题目是否通过
route.post('/checkSubject',(req,resp)=>{
	var id = req.body['subject.id'];
	var checkState = req.body['subject.checkState'];
	// console.log(id,checkState);
	// console.log(req.body);
	examDB.checkSubject(id,checkState).then((data)=>{
		// console.log(data);
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//删除题目信息
route.post('/delSubject',(req,resp)=>{
	var id = req.body['id'];
	// console.log(req.body);
	// console.log(id);
	examDB.delSubject(id).then((data)=>{
		// console.log(data);
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
function newArr(a){
    var arr = [];
    return arr.concat(a);
}
module.exports = route;