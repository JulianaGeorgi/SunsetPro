import { database } from "../firebase";
import { push, get } from "firebase/database";
import { ref } from "firebase/database";

export const articleServices = () => {

    const publishArticle = async (): Promise<{}> => {

        const newArticleRef = await push(ref(database, 'articles/'), {
            "city": "Lisbon",
            "lat": "38.7253",
            "lng": "-9.1500",
            "title": "Miradouro de senhora do monte sunset",
            "author": "Jeanny Joe",
            "authorImageUrl": "https://media.istockphoto.com/id/1326638534/photo/beautiful-african-american-woman-holding-red-book-looking-at-window-and-smiling-university.jpg?s=612x612&w=0&k=20&c=dOopOrEfKZuzBW3--hW-e0DXhmaQBc5LSoZTOuRmqnc=",
            "articleImageUrl": "https://blog.americadiamondshotel.com/wp-content/uploads/2019/08/MiradourodaSenhoradoMonteemLisboa.jpeg",
            "articleContent": "The Senhora do Monte viewpoint offers a panoramic view of Lisbon, which is also observed by a small image of the Virgin that gives the viewpoint its name. Behind the image is a small 18th century chapel, which is almost always closed. An old legend has it that pregnant women who sat on the stone chair inside would have their births made easier. This is one of the highest points in the city, so you can see several monuments, identified on a tile panel. The viewpoint is very popular at sunset, but during the day there are also those who spend hours in the shade of the olive trees, cypresses and stone pines. To get here, walk along Rua da Graça from Largo da Graça and turn left onto Rua da Senhora do Monte."
        });

        const newArticleId = newArticleRef.key;

        const articleSnapshot = await get(newArticleRef);
        const newArticleData = articleSnapshot.val();

        const resultObj = { ...newArticleData, id: newArticleId }

        return resultObj;
    }


    const fetchArticleById = async (articleId: string) => {
        const articleRef = ref(database, "/articles/" + articleId);

        try {
            const snapshot = await get(articleRef);
            if (snapshot.exists()) {
                const articleData = snapshot.val();
                return articleData;
            } else {
                // console.log("Article not found.");
                return {};
            }

        } catch (error) {
            // console.error("Error fetching item:", error);
            return error;
        };
    }

    return {
        publishArticle,
        fetchArticleById,
    }
}