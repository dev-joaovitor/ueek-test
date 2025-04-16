# Movefit Landing Page (UEEK Teste Técnico)

### Requisitos para rodar o projeto

- Internet estável
- Docker 27.3.1 ou maior
- Docker Compose 2.29.7 ou maior

### Passo-a-passo

1. Abra um terminal que possua o comando `docker compose` preferencialmente na versão citada acima
2. Clone este repositório na sua máquina pelo comando: `git clone git@github.com:dev-joaovitor/ueek-test.git`
3. Acesse a pasta onde o projeto clonado se encontra: `cd caminho/para/projeto/ueek-test`
4. Rode o comando: `docker compose up -d` e aguarde o Docker fazer seu trabalho
- Na primeira vez rodando o comando, pode ser que o container do backend nao inicie por conta do container do database, apenas rode o comando novamente para que o backend possa rodar.
5. Assim que os **TODOS** os containers estiverem rodando, abra seu navegador favorito e acesse:

#### Dependendo da velocidade da sua máquina e/ou a quantidade de recursos que alocou ao Docker pode demorar alguns segundos até que os endpoints estejam acessíveis.

- Landing page: http://localhost:3000
- Depoimentos: http://localhost:3000/admin/testimonials
- **Opcional**
  - Rode este comando caso deseje popular o banco de dados com 4 depoimentos padrões: `docker compose exec backend php artisan db:seed --class=TestimonialSeeder`
 
### Funcionalidades
- Listagem de depoimentos
  - Landing page
  - Painel admin
- Criar novo depoimento
- Editar um depoimento já criado
- Remover um depoimento

###### Disclaimer: Estou ciente de que subir arquivos .env é fortemente desaconselhado mesmo que não havendo chaves privadas, e que estes arquivos devem ser compartilhados de maneira segura entre colegas de equipe. A excessão feita neste projeto se deve a seu propósito de TESTE TÉCNICO e não será utilizado para meios comerciais.
