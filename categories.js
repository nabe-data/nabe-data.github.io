const categories = [
    {
        id: 'programming',
        name: 'プログラミング',
        slug: 'programming',
        icon: 'code', // アイコンのクラス名やパスを指定可能
        description: 'プログラミングに関する記事'
    },
    {
        id: 'data',
        name: 'データサイエンス',
        slug: 'data-science',
        icon: 'chart',
        description: 'データサイエンスに関する記事'
    },
    {
        id: 'language',
        name: '言語学習',
        slug: 'language-learning',
        icon: 'book',
        description: '語学学習に関する記事'
    }
];

// カテゴリ関連のユーティリティ関数
const CategoryManager = {
    // すべてのカテゴリを取得
    getAllCategories() {
        return categories;
    },

    // IDによってカテゴリを取得
    getCategoryById(id) {
        return categories.find(category => category.id === id);
    },

    // カテゴリ名によってカテゴリを取得
    getCategoryByName(name) {
        return categories.find(category => category.name === name);
    },

    // カテゴリの存在確認
    isValidCategory(categoryId) {
        return categories.some(category => category.id === categoryId);
    },

    // ナビゲーションメニューのHTML生成
    generateNavMenu() {
        const menuItems = categories.map(category => `
            <li>
                <a href="#${category.slug}" id="${category.id}Link" class="category-link">
                    ${category.name}
                </a>
            </li>
        `).join('');
        
        return `
            <li><a href="#" id="allLink">すべて</a></li>
            ${menuItems}
        `;
    }
};

export default CategoryManager;