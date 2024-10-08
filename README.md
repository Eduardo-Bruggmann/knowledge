# 🧠 Knowledge Project

Este é um projeto full stack que utiliza um banco de dados **relacional** (PostgreSQL) e um banco **NoSQL** (MongoDB).  
Abaixo estão as instruções para você rodar tudo localmente de forma tranquila e organizada.

---

## 🚀 Primeiros Passos

### 1. Instale as dependências

Execute o comandos abaixo nas pastas backend e frontend:

```
npm install
```

---

### 2. Configure as variáveis de ambiente

- Renomeie o arquivo `.env_file` para `.env`.
- Preencha com suas configurações pessoais (conexões com banco, chaves, etc.).
- Você precisará de:
  - ✅ Um banco **PostgreSQL** (SQL) // ou outro de sua preferência
  - ✅ Um banco **MongoDB** (NoSQL) // ou outro de sua preferência

---

### 3. Crie um usuário administrador

> Este passo é essencial para acessar as funcionalidades protegidas da aplicação.

- Insira manualmente um admin na tabela `users`.
- **A senha deve estar criptografada com um hash compatível com `bcrypt-nodejs`.**
- Exemplo:

```
INSERT INTO users (name, email, password, admin)
VALUES ('Admin', 'admin@email.com', '<hash_bcrypt_nodejs>', true);
```

---

### 4. Inicie os servidores

Rode o backend e o frontend:

```
npm start / npm run serve
```

---

## ⚠️ Atenção

- Algumas bibliotecas utilizadas neste projeto já estão ficando **obsoletas**.
- Se você encontrar erros, verifique os `imports`, versões e considere atualizar dependências.
- Esse projeto não usa as versões mais recentes do `bcrypt`, então **certifique-se de manter a compatibilidade com `bcrypt-nodejs`** ao gerar hashes de senha manualmente.

---

## 💡 Dicas

- ✅ Sempre valide os dados de ambiente antes de rodar.
- 🔐 Nunca exponha seus hashes nem suas variáveis de produção.
- 🧪 Teste o app após a criação do admin para garantir que está tudo certo.

---

Feito com 💻 por **Eduardo Bruggmann**
