var pool = require('./pool');

module.exports = {
	getAllSubjectType(){
		var sql = "select * from tbl_exam_subjecttype";
		return pool.execute(sql);
	},
	getAllSubjectLevel(){
		var sql = "select * from tbl_exam_subjectlevel";
		return pool.execute(sql);
	},
	getAllDepartments(){
		var sql = "select * from tbl_exam_epartment";
		return pool.execute(sql);
	},
	getAllTopics(){
		var sql = "select * from tbl_exam_topic";
		return pool.execute(sql);
	},
	getAllSubjects(ids){
		var sql = "select * from tbl_exam_subject where department_id="+ids[1]+" and subjectLevel_id="+ids[2]+" and subjectType_id="+ids[0]+" and topic_id="+ids[3];
		return pool.execute(sql);
	},
	checkSubject(id,checkState){
		var sql = "update tbl_exam_subject set checkState='"+checkState+"' where id="+id;
		return pool.execute(sql);
	},
	delSubject(id){
		var sql = "delete from tbl_exam_subject where id="+id;
		return pool.execute(sql);
	}
}