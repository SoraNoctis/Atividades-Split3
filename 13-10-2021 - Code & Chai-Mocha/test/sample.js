import chai from "chai";
import chaiHttp from "chai-http";
import faker from "faker";

chai.use(chaiHttp);

//describe("Teste 1", () => {
//    it("Deve rodar o primeiro teste", () => {
//        console.log("Turma do PB Funcional Rox!")
//    })
//})

describe("Testes", () => {
    it("Deve rodar o primeiro 1/2 teste", (done) => {
        chai
            .request("http://localhost:3000")
            .get("/usuarios")
            .end((err, res) => {
                //console.log(res.body)
                chai.assert(res.statusCode === 200)
                done()
           })
    })

    it("Deve rodar o primeiro 2/2 teste", (done) => {
        chai
            .request("http://localhost:3000")
            .get("/usuarios")
            .end((err, res) => {
                //console.log(res.body)
                chai.expect(res.body).has.property("usuarios")
                done()
           })
    })

    it("Deve rodar o segundo teste", (done) => {
        chai
            .request("http://localhost:3000")
            .post("/login")
            .send({
                "email": "fulano@qa.com",
                "password": "teste"
            })
            .end((err, res) => {
                console.log(res.body)
                chai.expect(res).to.have.status(200)
                chai.expect(res.body.message).to.equal("Login realizado com sucesso")
                chai.expect(res.body.authorization).to.exist
                done()
            })
    })

    it("Deve rodar o terceiro teste", (done) => {
        chai
            .request("http://localhost:3000")
            .post("/produtos")
            .send({
                "nome": faker.lorem,
                "preco": faker.random,
                "descricao": faker.lorem,
                "quantidade": faker.random
            })
            .set({
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNjM0MTU3NjE5LCJleHAiOjE2MzQxNTgyMTl9.48fxZBSbv41r74h-QAof1D6zeEtsUVCk7kL_Qbpog8I"
            })
            .end((err, res) => {
                //console.log(res.body)
                chai.expect(res.body).has.property("nome")
                chai.expect(res.body).has.property("preco")
                chai.expect(res.body).has.property("descricao")
                chai.expect(res.body).has.property("quantidade")
                done()
            })
    })

//#####################################################################################################################################################################################################################################

    it("Deve rodar o teste post login com FALHA", (done) => {
        chai
            .request("http://localhost:3000")
            .post("/login")
            .send({ 
                "email": "fulano@qa.com",
                "password": "sendAntonioNunes"
            })
            .end((err, res) => {
                chai.expect(res.statusCode === 401)
                chai.expect(res.body.message).to.equal("Email e/ou senha inválidos")
                done()
            })
    })

    it("Deve rodar o teste post usuario", (done) => {
        chai
            .request("http://localhost:3000")
            .post("/usuarios")
            .send({
                "nome": "dab baf rab",
                "email": "aaa@aaa.com",
                "password": "random",
                "administrador": "true"
            })
            .end((err, res) => {
                //console.log(res.body)
                chai.expect(res.statusCode === 201)
                chai.expect(res.body).have.property("message")
                chai.expect(res.body).have.property("_id")
                done()
            })
    })

    it("Deve rodar o teste get usuarios", (done) => {
        chai
            .request("http://localhost:3000")
            .get("/usuarios")
            .end((err, res) => {
                //console.log(res.body)
                chai.expect(res.statusCode === 200)
                done()
            })
    })

})
