function showCreateTestForm() {
    var form = document.getElementById('create-test-form');
    form.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCreateTestForm() {
    var form = document.getElementById('create-test-form');
    form.style.display = 'none';
    document.body.style.overflow = '';
}

function showAddClassForm() {
    var form = document.getElementById('add-class-form');
    form.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAddClassForm() {
    var form = document.getElementById('add-class-form');
    form.style.display = 'none';
    document.body.style.overflow = '';
}

function closeAddStudentForm() {
    var form = document.getElementById('add-student-form');
    form.style.display = 'none';
    document.body.style.overflow = '';
}

function addClass() {
    var className = document.getElementById('class-name').value;
    var studentsCount = document.getElementById('students-count').value;

    if (className && studentsCount) {
        var newClassName = document.createElement('a');
        var newStudentsCount = document.createElement('a');
        var addStudentButton = document.createElement('a');
        var deleteClassButton = document.createElement('a');
        newClassName.textContent = className;
        newStudentsCount.textContent = '0/' + studentsCount;
        addStudentButton.textContent = '+';
        deleteClassButton.textContent = '×';
        addStudentButton.onclick = function showAddStudentForm() {
            var form = document.getElementById('add-student-form');
            form.style.display = 'block';
            document.body.style.overflow = 'hidden';
        };
        
        document.getElementById('class-name-list').appendChild(newClassName);
        document.getElementById('student-count-list').appendChild(newStudentsCount);
        document.getElementById('add-student-buttons-list').appendChild(addStudentButton);
        document.getElementById('delete-class-buttons-list').appendChild(deleteClassButton);
    }
}

function addStudent() {
    var studentName = document.getElementById('student-name').value;
    var studentId = document.getElementById('student-id').value;
    
}