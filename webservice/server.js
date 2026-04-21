import { createServer } from 'node:http';
import { json } from 'node:stream/consumers';

const mockData = JSON.stringify([
    {
        id: '1d4f66c6-c48b-4743-ba6c-555aaafbfd0f', 
        title: 'Ainda Estou Aqui ', 
        genre: 'Drama, Suspense', 
        synopsis: 'Ainda Estou Aqui é uma adaptação cinematográfica do livro autobiográfico de Marcelo Rubens Paiva, que narra a emocionante trajetória de sua mãe, Eunice Paiva, durante a ditadura militar no Brasil. Ambientada em 1970, a história retrata como a vida de uma mulher comum, casada com um importante político, muda drasticamente após o desaparecimento de seu marido, capturado pelo regime militar. Forçada a abandonar sua rotina de dona de casa, Eunice (Fernanda Torres/Fernanda Montenegro) se transforma em uma ativista dos direitos humanos, lutando pela verdade sobre o paradeiro de seu marido e enfrentando as consequências brutais da repressão. O filme explora não apenas o drama pessoal de Eunice, mas também o impacto do regime militar na vida de milhares de famílias brasileiras, destacando o papel das mulheres na resistência. Com uma narrativa profunda e sensível, Ainda Estou Aqui traz à tona questões de perda, coragem e resiliência, enquanto revisita um dos períodos mais sombrios da história do Brasil. A obra é um tributo à força de Eunice Paiva, que, contra todas as adversidades, se torna uma figura central na luta pelos direitos humanos no país.'
    },
    {   id: '3a15945f-95a0-476c-9187-9de5d2547137', 
        title: 'A Substância', 
        genre: 'Drama, Terror', 
        synopsis: 'Em A Substância, Elisabeth Sparkle (Demi Moore) é uma celebridade em declínio que enfrenta uma reviravolta inesperada ao ser demitida de seu programa fitness na televisão. Desesperada por um novo começo, ela decide experimentar uma droga do mercado clandestino que promete replicar suas células, criando temporariamente uma versão mais jovem e aprimorada de si mesma. Agora, a atriz se vê dividida entre suas duas versões (Margaret Qualley), que devem coexistir enquanto navegam pelos desafios da fama e da identidade. "Já sonhou com uma versão melhor de si mesmo? Você. Só que melhor em todos os sentidos. De verdade. Você precisa experimentar este novo produto, A Substância. MUDOU A MINHA VIDA. Ele gera outro você. Um você novo, mais jovem, mais bonito, mais perfeito. E há apenas uma regra: vocês dividem o tempo. Uma semana para você. Uma semana para o novo você. Sete dias para cada um. Um equilíbrio perfeito. Fácil, certo?"'
    },
    {
        id: '2da13f8f-9c45-4970-af69-1e221435b7ab', 
        title: 'Robô Selvagem', 
        genre: 'Aventura, Animação, Comédia, Família', 
        synopsis: 'Uma nave naufraga numa terra desabitada e dá início à aventura épica do robô Roz, a última unidade das chamadas ROZZUM ainda funcional e inteligente. Preso nesta ilha aparentemente sozinho, Roz precisa sobreviver às intempéries da floresta. Sua única esperança é se adaptar ao ambiente hostil e avesso às suas programações. Para isso, Roz passa a conviver com os animais aprendendo sobre a vida na selva e os modos de sobrevivência na natureza. É durante essa exploração que Roz encontra um filhote de ganso e estabelece como missão cuidá-lo. Desse laço inesperado com o bicho abandonado, Roz se aproxima de uma realidade nova e instigante, construindo uma relação harmoniosa com os animais nativos. Do mesmo diretor de Lilo & Stitch e Como Treinar o Seu Dragão, Robô Selvagem é uma história comovente sobre a convivência entre tecnologia e natureza e o significado de estar vivo.'
    }
])

const hostname = 'localhost';
const port = 3001;

const server = createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*") // CORS
    res.setHeader("Content-Type", "application/json") // header
    res.statusCode = 200 // statusCode
    res.end(mockData); // body
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
