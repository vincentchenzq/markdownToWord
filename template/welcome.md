## 注意事项1
 + 条目1
 + 条目2
 <% if (admin) { %>+ 条目3<% } %>

<% if (admin) { %>
<h2>欢迎您，管理员<%= userName %></h2>
<% } else { %>
<h3> 欢迎您，普通员工<%= userName %> </h3>
<% } %>    

![图1](./img/1.png)