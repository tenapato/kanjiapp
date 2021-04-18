import mongoose from 'mongoose';

const kanjiSchema = mongoose.Schema({
    file: String,
    significado: String,
    trazos: Number,
    onyomi: String,
    kunyomi: String,
    otras_lec: [String],
    palabras_ut: [String]
});

const PostKanji = mongoose.model('PostKanji', kanjiSchema);

export default PostKanji;