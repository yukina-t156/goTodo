4/26
Go言語とかで作ろうかと思ったけど、まずJavaScriptで作ってみる？
あとで色々機能を拡張したい！


構成

- テキストボックスにタスク名追加
- 登録ボタン->タスクを登録
- 下に登録したTODOのリストを表示
- 終わったものをクリックすると二重線になる

index.html
body
├── form "task_name"
├── button "add_task"
├── ul "todo-list"
│   └── li "tasks"
└── script "js/todo.js"
