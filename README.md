# Projeto 19 - DrivenPass

Este é o projeto número 20 feito pela Driven Education. Ele é uma API feita inteiramente em TypeScript, e fica reponsável por gerenciar um sistema de armazenamento de arquivos de provas, bem como a coleta dos dados separados por matéria, professores, categorias etc. Agora, irei explicar como funciona.

## Rota User

### Método POST /signup:
- Recebe: { email, password }, e trata de criar a sua conta na API para acesso e login
- Retorna: status code 201

### Método POST /signin:
- Recebe: { email, password }, e trata de fazer login na sua conta da API
- Retorna: o seu token JWT criado pela aplicação para validação da sessão
