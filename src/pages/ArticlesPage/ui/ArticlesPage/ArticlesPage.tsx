import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Article,
} from '@/entities/Articles';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import {
    fetchNextArticlesPage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlePageReducer,
};

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Javascript news Javascript news',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'Cesar',
        avatar: 'https://media.licdn.com/dms/image/C4D03AQF7kZ-G8bCD6Q/profile-displayphoto-shrink_200_200/0/1566396514206?e=1723075200&v=beta&t=9wSwBk55DWcBZY8EOdVmWoG9PSY_xCkh5YsRe1YB7yE',
    },
    type: [
        'IT',
        'SCIENCE',
        'POLITICS',
        'ECONOMICS',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                `The program, which is traditionally called “Hello, world!”, 
                is very simple. It outputs somewhere the phrase “Hello, world!”, or another similar one,
                using a certain language.',
                JavaScript is a language in which programs can be executed in different environments. 
                In our case, we are talking about browsers and the Node.js server platform. 
                If you have not yet written a single line of code in JS and are reading this 
                text in a browser, on desktop, which means you're literally 
                seconds away from running your first JavaScript program.",
                "There are other ways to run JS code in the browser. 
                So, in the typical usage of JavaScript programs, they are loaded into the browser 
                to make web pages work. As a rule, the code is formatted as separate files with the 
                .js extension, which are connected to web pages, but the program code 
                can also be included directly in the page code. All this is done using the <script> tag. 
                When the browser encounters such code, it executes it. 
                For more information about the script tag, visit w3school.com. In particular, let's 
                consider an example demonstrating how to work with a web page using JavaScript, 
                given on this resource. This example can also be run using this resource (look for 
                the Try it Yourself button), but we will do it a little differently. Namely, 
                let's create a new file in some text editor (for example, in VS Code or Notepad++), 
                which we will call hello.html, and add the following code to it:`,
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: `<!DOCTYPE html>\n<html>\n<body>
            \n <p id="hello"></p>\n\n <script>
            \n document.getElementById("hello").innerHTML = "Hello, world!";
            \n </script>\n  </body>\n</html>;`,
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                `The program, which is traditionally called “Hello, world!”, 
                is very simple. It outputs somewhere the phrase “Hello, world!”, or another similar one,
                using a certain language.',
                JavaScript is a language in which programs can be executed in different environments. 
                In our case, we are talking about browsers and the Node.js server platform. 
                If you have not yet written a single line of code in JS and are reading this 
                text in a browser, on desktop, which means you're literally 
                seconds away from running your first JavaScript program.",
                "There are other ways to run JS code in the browser. 
                So, in the typical usage of JavaScript programs, they are loaded into the browser 
                to make web pages work. As a rule, the code is formatted as separate files with the 
                .js extension, which are connected to web pages, but the program code 
                can also be included directly in the page code. All this is done using the <script> tag. 
                When the browser encounters such code, it executes it. 
                For more information about the script tag, visit w3school.com. In particular, let's 
                consider an example demonstrating how to work with a web page using JavaScript, 
                given on this resource. This example can also be run using this resource (look for 
                the Try it Yourself button), but we will do it a little differently. Namely, 
                let's create a new file in some text editor (for example, in VS Code or Notepad++), 
                which we will call hello.html, and add the following code to it:`,
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - site screenshot',
        },
        {
            id: '3',
            type: 'CODE',
            code: `const path = require('path');\n\n
            const server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));
            \n\nserver.use(jsonServer.defaults({}));
            \nserver.use(jsonServer.bodyParser);`,
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                `JavaScript is a language that allows programs to run in different environments. 
                In our case, we are talking about browsers and the Node.js server platform. 
                If you haven't written a single line of JS code yet and are reading this text in a 
                browser on a desktop computer, this means that you are literally seconds away from your first JavaScript program.",
                "There are other ways to run JS code in the browser. So, if we talk about the usual 
                use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages.
                As a rule, the code is formatted in the form of separate files with the 
                .js extension, which connect to web pages, but the program code can also be included directly in the page code. 
                This is all done using the <script> tag. When the browser detects such code, it executes it. 
                Details about the script tag can be found on the website w3school.com. , 
                let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. 
                This example can also be run using this resource (look for the Try it Yourself button), 
                but we will do it a little differently, namely, we will create it in some text editor. 
                (for example, in VS Code or Notepad++) a new file, which we will call hello.html, and add the following code to it:`,
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - site screenshot',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                `JavaScript is a language that allows programs to run in different environments. 
                In our case, we are talking about browsers and the Node.js server platform. 
                If you haven't written a single line of JS code yet and are reading this 
                text in a browser on a desktop computer, this means that you are literally 
                seconds away from your first JavaScript program.`,
            ],
        },
    ],
} as Article;

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlePage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {/* <ArticleViewSelector view={view} onViewClick={onChangeView} /> */}
                {/* <ArticleList articles={[article]} /> */}
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
