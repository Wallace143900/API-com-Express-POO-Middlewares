Criando uma API de um catálogo de cursos

app.ts = Arquivo principal, onde instânciei o express
server.ts = Responsável por iníciar o servidor local.

=============================================================================================================================================

primeira coisa que fiz foi começar pela tipagem incluindo a pasta interface, dizendo que o curso vai ter : 

- Id
- título
- Uma descrição
- Um preço
- Nível de dificuldade
- A data para cadatrar
- A data de atualização opcional

Quando o curso criado, vai receber obrigatoriamente usando o Pick "Título","descrição","preço", e "nível de dificuldade".

Opcionalmente quando necessário atualizar com o Partial as interface obrigatórias do curso criado.

=============================================================================================================================================

Na pasta services fiz a regra de negócios para minha aplicação.

Criei uma classe encapsulando tudo, e métodos de classes que vai ser minhas rotinas de regras de negócios.

create = Lógica para criação de cursos.

getMany = Lógica para leitura multípla recebenco um valor de busca dos cursos.

getOne = Lógica para leitura de um único curso identificando pelo id.

Update = Lógica para atualização opcional de um curso identificando pelo id.

delete = Lógica para exclusão de um curso identificando pelo id.
============================================================================================================================================

Na Pasta Database eu criei uma simulação de banco de dados funcional para armazenar os cursos.

============================================================================================================================================

Na pasta controllers criei uma classe , e os controles vai ser encapsulado nessa classe.

Create = usei request pegando todo o corpo do curso obrigatório, e o response para status 201 mostrando que foi criado o curso.

getMany = usei o request query para colocar um parâmetro opcional, e o response para status 200 mostrando que foi lido o curso.

getOne = usei o request params pois é um parâmetro obrigatório, e o response para status 200 mostrando que foi lido o curso pelo id.

Update = usei o request params pois é um parâmetro obrigatório, e o response para status 200 mostrando que foi atualizado o curso pelo id.

remove = usei o request params pois é um parâmetro obrigatório, e o response para status 200 mostrando que foi excluído o curso pelo id.

===========================================================================================================================================

Na pasta routes Criei as rotas para associar lógicas aos respectivos endereços de Post, Get, Patch, Delete.