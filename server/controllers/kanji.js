import PostKanji from '../models/postKanji.js';


export const getKanji =  async (req, res) => {
    //res.send('App corriendo');
    try {
        const postKanjis = await PostKanji.find();

        console.log(postKanjis);

        res.status(200).json(postKanjis);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createKanji = async (req, res) => {
    //res.send('Kanji creation');
    const kanji = req.body;

    const newKanji = new KanjiMessage(kanji);
    try {
        await newKanji.save();

        res.status(201).json(newKanji);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}