// articles.js
const articles = [
    {
        id: 1,
        title: 'Reactフックの基本',
        category: 'プログラミング',
        readTime: '5分',
        image: 'image/react-hooks.png',
        content: `
            <p>Reactフックは、関数コンポーネントで状態やライフサイクルの機能を使用できるようにする機能です。主要なフックには以下のようなものがあります：</p>
            <h2>useState</h2>
            <p>コンポーネント内で状態を管理するためのフックです。以下は使用例です：</p>
            <pre><code>
const [count, setCount] = useState(0);
            </code></pre>
            <h2>useEffect</h2>
            <p>副作用を扱うためのフックです。コンポーネントのレンダリング後に実行されます：</p>
            <pre><code>
useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);
            </code></pre>
            <h2>useContext</h2>
            <p>Reactのコンテキストを簡単に使用するためのフックです：</p>
            <pre><code>
const value = useContext(MyContext);
            </code></pre>
            <img src="image/react-hooks-diagram.jpg" alt="Reactフックの図解" />
            <p>これらのフックを使いこなすことで、よりシンプルで再利用可能なReactコンポーネントを作成できます。</p>
        `,
        snippet: 'Reactフックを使用して状態管理を簡素化する方法について学びました。'
    },
    {
        id: 2,
        title: 'Python pandas入門',
        category: 'データサイエンス',
        readTime: '7分',
        image: 'image/pandas-intro.png',
        content: `
            <p>Pythonのpandasライブラリは、データ分析に欠かせないツールです。以下に基本的な使用方法を紹介します：</p>
            <h2>データの読み込み</h2>
            <pre><code>
import pandas as pd
df = pd.read_csv('data.csv')
            </code></pre>
            <h2>データの表示</h2>
            <pre><code>
print(df.head())  # 最初の5行を表示
            </code></pre>
            <h2>基本的な統計情報</h2>
            <pre><code>
print(df.describe())
            </code></pre>
            <img src="image/pandas-intro.png" alt="pandasを使用したデータ分析の例" />
            <p>pandasを使いこなすことで、大量のデータを効率的に処理し、洞察を得ることができます。</p>
        `,
        snippet: 'データ分析に欠かせないpandasライブラリの基本的な使い方を紹介します。'
    },
    {
        id: 3,
        title: '効果的な英語学習法',
        category: '言語学習',
        readTime: '6分',
        image: 'image/english-learning.jpg',
        content: `
            <p>英語力を効果的に向上させるためには、以下の4つのスキルをバランスよく学習することが重要です：</p>
            <h2>1. リスニング</h2>
            <p>英語のポッドキャストや映画を聴くことで、リスニング力を向上させましょう。</p>
            <h2>2. スピーキング</h2>
            <p>言語交換アプリを使用したり、英語の会話クラスに参加したりして、実践的なスピーキング練習を行いましょう。</p>
            <h2>3. リーディング</h2>
            <p>英語の記事や本を読むことで、語彙力と読解力を高めましょう。</p>
            <h2>4. ライティング</h2>
            <p>日記を英語で書いたり、オンラインフォーラムで英語でコメントしたりして、ライティング力を磨きましょう。</p>
            <img src="image/english-learning-diagram.jpg" alt="効果的な英語学習法の図解" />
            <p>これらのスキルを総合的に学習することで、バランスの取れた英語力を身につけることができます。</p>
        `,
        snippet: '日常的に英語力を向上させるための実践的なテクニックを紹介します。'
    }
];

// 記事一覧を表示する関数
function displayArticleList(containerId) {
    const container = document.getElementById(containerId);
    articles.forEach(article => {
        const articleElement = document.createElement('a');
        articleElement.href = `article.html?id=${article.id}`;
        articleElement.className = 'article-link';
        articleElement.innerHTML = `
            <div class="article-card" data-category="${article.category.toLowerCase()}">
                <img src="${article.image}" alt="${article.title}">
                <h3>${article.title}</h3>
                <p>${article.snippet}</p>
                <span class="read-time">読了時間: ${article.readTime}</span>
            </div>
        `;
        container.appendChild(articleElement);
    });
}

// 記事の詳細を表示する関数
function displayArticleDetail(articleId) {
    const article = articles.find(a => a.id === parseInt(articleId));
    if (article) {
        document.title = `${article.title} - My Learning Journey`;
        document.getElementById('articleTitle').textContent = article.title;
        document.getElementById('articleCategory').textContent = article.category;
        document.getElementById('articleReadTime').textContent = `読了時間: ${article.readTime}`;
        document.getElementById('articleImage').src = article.image;
        document.getElementById('articleImage').alt = article.title;
        document.getElementById('articleContent').innerHTML = article.content;
    } else {
        document.getElementById('articleTitle').textContent = '記事が見つかりません';
        document.getElementById('articleContent').textContent = '申し訳ありませんが、指定された記事は存在しません。';
    }
}