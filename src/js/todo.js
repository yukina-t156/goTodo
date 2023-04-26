

// 追加ボタンを作成
const addTasks = (task) => {

    // 取得したnew_taskをindex.html内のtodo-listに追加する
    document.getElementById("todo-list").innerHTML
                                    += "<li>" + task + "</li>";
  
    // タスクを追加
  
    // 削除ボタンを作成

  };


// ボタンにクリックイベントのハンドラーを割り当てる
document.getElementById("add_task").onclick = function() {
//    alert("ボタンがクリックされました!!");
    // index.htmlのid=task_nameのformの値を取得する
    var new_task = document.getElementById("task_name").value;
    addTasks(new_task);
    document.getElementById("task_name").value = '';
};