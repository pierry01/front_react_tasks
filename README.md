# BLOX - API Ruby on Rails + ReactJS

**Para esta versão, foi usado o princípio de MVP. Existem melhorias que podem ser discutidas e implementadas**

# Produção

A API_BASE está disponível no endereço:
https://jpierry-api-tasks.herokuapp.com

O front-end foi hospedado usando surge.sh e está disponível em:
http://front_react_tasks.surge.sh


# Endpoints

**Users:**
* GET /tasks             ----> Retorna a lista de tarefas cadastradas
* GET /tasks/:id         ----> Retorna uma tarefa, com base no parâmetro :id (**função não implementada no front-end**)
* POST /tasks            ----> Cria tarefas com base em dois parâmetros: {"title": "...", "done": boolean} que devem ser enviados no body da requisição.
* PUT/PATCH /tasks/:id   ----> Atualiza os dados de uma tarefa, com base no parâmetro :id (**implementação no front-end apenas para o campo *"done"***)
* DELETE /tasks/:id      ----> Deleta uma tarefa, com base no parâmetro :id
