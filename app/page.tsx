'use client';

import { useEffect, useMemo, useState } from 'react';

type Word = { word: string; split: string; tamilSound: string; tamil: string; meaning: string; kind: string; emoji: string; examples: [string, string][] };
type Category = { id: string; name: string; tamil: string; emoji: string; color: string; words: Word[] };

const categories: Category[] = [
  { id: 'home', name: 'Home & Family', tamil: 'வீடும் குடும்பமும்', emoji: '🏡', color: '#ef8354', words: [
    { word: 'Home', split: 'Home', tamilSound: 'ஹோம்', tamil: 'வீடு', meaning: 'The place where you live.', kind: 'Noun', emoji: '🏠', examples: [['I am at home.', 'நான் வீட்டில் இருக்கிறேன்.'], ['Our home is small.', 'எங்கள் வீடு சிறியது.'], ['Let us go home.', 'நாம் வீட்டிற்குப் போகலாம்.']] },
    { word: 'Family', split: 'Fam-i-ly', tamilSound: 'ஃபேம்-இ-லி', tamil: 'குடும்பம்', meaning: 'People related to one another.', kind: 'Noun', emoji: '👨‍👩‍👧', examples: [['I love my family.', 'நான் என் குடும்பத்தை நேசிக்கிறேன்.'], ['My family is here.', 'என் குடும்பம் இங்கே இருக்கிறது.'], ['We eat as a family.', 'நாங்கள் குடும்பமாகச் சாப்பிடுகிறோம்.']] },
    { word: 'Mother', split: 'Moth-er', tamilSound: 'மதர்', tamil: 'அம்மா', meaning: 'A female parent.', kind: 'Noun', emoji: '👩', examples: [['My mother is kind.', 'என் அம்மா அன்பானவர்.'], ['Mother is cooking.', 'அம்மா சமைக்கிறார்.'], ['I called my mother.', 'நான் என் அம்மாவை அழைத்தேன்.']] },
    { word: 'Door', split: 'Door', tamilSound: 'டோர்', tamil: 'கதவு', meaning: 'The part that opens and closes an entrance.', kind: 'Noun', emoji: '🚪', examples: [['Open the door.', 'கதவைத் திறக்கவும்.'], ['The door is brown.', 'கதவு பழுப்பு நிறத்தில் உள்ளது.'], ['Please close the door.', 'தயவுசெய்து கதவை மூடுங்கள்.']] },
    { word: 'Room', split: 'Room', tamilSound: 'ரூம்', tamil: 'அறை', meaning: 'A part of a building with walls.', kind: 'Noun', emoji: '🛋️', examples: [['This is my room.', 'இது என் அறை.'], ['The room is clean.', 'அறை சுத்தமாக உள்ளது.'], ['Come into the room.', 'அறைக்குள் வாருங்கள்.']] },
    { word: 'Help', split: 'Help', tamilSound: 'ஹெல்ப்', tamil: 'உதவி', meaning: 'To make something easier for someone.', kind: 'Verb', emoji: '🤝', examples: [['Please help me.', 'தயவுசெய்து எனக்கு உதவுங்கள்.'], ['Can I help you?', 'நான் உங்களுக்கு உதவலாமா?'], ['She helps her mother.', 'அவள் தன் அம்மாவுக்கு உதவுகிறாள்.']] },
  ]},
  { id: 'food', name: 'Food & Cooking', tamil: 'உணவும் சமையலும்', emoji: '🥣', color: '#e3a23a', words: [
    { word: 'Water', split: 'Wa-ter', tamilSound: 'வா-டர்', tamil: 'தண்ணீர்', meaning: 'The clear liquid that we drink.', kind: 'Noun', emoji: '💧', examples: [['Please give me water.', 'தயவுசெய்து எனக்கு தண்ணீர் கொடுங்கள்.'], ['I drink water every morning.', 'நான் தினமும் காலையில் தண்ணீர் குடிப்பேன்.'], ['The water is hot.', 'தண்ணீர் சூடாக இருக்கிறது.']] },
    { word: 'Food', split: 'Food', tamilSound: 'ஃபூட்', tamil: 'உணவு', meaning: 'What people eat.', kind: 'Noun', emoji: '🍛', examples: [['The food is ready.', 'உணவு தயாராக உள்ளது.'], ['This food is tasty.', 'இந்த உணவு சுவையாக இருக்கிறது.'], ['We need some food.', 'நமக்கு கொஞ்சம் உணவு தேவை.']] },
    { word: 'Rice', split: 'Rice', tamilSound: 'ரைஸ்', tamil: 'அரிசி / சாதம்', meaning: 'A small grain cooked as food.', kind: 'Noun', emoji: '🍚', examples: [['I eat rice for lunch.', 'நான் மதிய உணவிற்கு சாதம் சாப்பிடுகிறேன்.'], ['The rice is warm.', 'சாதம் சூடாக இருக்கிறது.'], ['Please cook the rice.', 'தயவுசெய்து சாதத்தை சமைக்கவும்.']] },
    { word: 'Cook', split: 'Cook', tamilSound: 'குக்', tamil: 'சமை', meaning: 'To prepare food using heat.', kind: 'Verb', emoji: '🍳', examples: [['I cook every day.', 'நான் தினமும் சமைக்கிறேன்.'], ['Can you cook rice?', 'உங்களால் சாதம் சமைக்க முடியுமா?'], ['She cooks very well.', 'அவள் நன்றாக சமைக்கிறாள்.']] },
    { word: 'Eat', split: 'Eat', tamilSound: 'ஈட்', tamil: 'சாப்பிடு', meaning: 'To put food in your mouth and swallow it.', kind: 'Verb', emoji: '🥄', examples: [['Let us eat now.', 'இப்போது நாம் சாப்பிடலாம்.'], ['I eat a banana.', 'நான் ஒரு வாழைப்பழம் சாப்பிடுகிறேன்.'], ['Please eat slowly.', 'தயவுசெய்து மெதுவாக சாப்பிடுங்கள்.']] },
    { word: 'Taste', split: 'Taste', tamilSound: 'டேஸ்ட்', tamil: 'சுவை', meaning: 'The flavour of food or drink.', kind: 'Noun / Verb', emoji: '😋', examples: [['Taste this soup.', 'இந்த சூப்பை சுவைத்துப் பாருங்கள்.'], ['It tastes sweet.', 'இது இனிப்பாக இருக்கிறது.'], ['I like the taste.', 'எனக்கு இந்த சுவை பிடிக்கும்.']] },
  ]},
  { id: 'health', name: 'Body & Health', tamil: 'உடலும் உடல்நலமும்', emoji: '🫶', color: '#db6f78', words: [
    { word: 'Head', split: 'Head', tamilSound: 'ஹெட்', tamil: 'தலை', meaning: 'The top part of your body.', kind: 'Noun', emoji: '🙂', examples: [['My head hurts.', 'என் தலை வலிக்கிறது.'], ['Turn your head.', 'உங்கள் தலையைத் திருப்புங்கள்.'], ['Keep your head up.', 'உங்கள் தலையை நிமிர்த்தி வையுங்கள்.']] },
    { word: 'Hand', split: 'Hand', tamilSound: 'ஹேண்ட்', tamil: 'கை', meaning: 'The part at the end of your arm.', kind: 'Noun', emoji: '✋', examples: [['Wash your hands.', 'உங்கள் கைகளைக் கழுவுங்கள்.'], ['Give me your hand.', 'உங்கள் கையை என்னிடம் கொடுங்கள்.'], ['My hand is cold.', 'என் கை குளிராக இருக்கிறது.']] },
    { word: 'Walk', split: 'Walk', tamilSound: 'வாக்', tamil: 'நட', meaning: 'To move forward on your feet.', kind: 'Verb', emoji: '🚶‍♀️', examples: [['I walk every morning.', 'நான் தினமும் காலையில் நடக்கிறேன்.'], ['Let us walk home.', 'நாம் வீட்டிற்கு நடந்து செல்லலாம்.'], ['Walk slowly, please.', 'தயவுசெய்து மெதுவாக நடங்கள்.']] },
    { word: 'Pain', split: 'Pain', tamilSound: 'பெயின்', tamil: 'வலி', meaning: 'An unpleasant feeling in the body.', kind: 'Noun', emoji: '🤕', examples: [['I have back pain.', 'எனக்கு முதுகு வலி உள்ளது.'], ['Where is the pain?', 'வலி எங்கே இருக்கிறது?'], ['The pain is less now.', 'இப்போது வலி குறைவாக உள்ளது.']] },
    { word: 'Doctor', split: 'Doc-tor', tamilSound: 'டாக்-டர்', tamil: 'மருத்துவர்', meaning: 'A person trained to treat illness.', kind: 'Noun', emoji: '🩺', examples: [['I need a doctor.', 'எனக்கு ஒரு மருத்துவர் தேவை.'], ['The doctor is here.', 'மருத்துவர் இங்கே இருக்கிறார்.'], ['Please call the doctor.', 'தயவுசெய்து மருத்துவரை அழைக்கவும்.']] },
    { word: 'Healthy', split: 'Health-y', tamilSound: 'ஹெல்த்-தி', tamil: 'ஆரோக்கியமான', meaning: 'Well and not sick.', kind: 'Adjective', emoji: '💪', examples: [['I feel healthy.', 'நான் ஆரோக்கியமாக உணர்கிறேன்.'], ['This is healthy food.', 'இது ஆரோக்கியமான உணவு.'], ['Walking keeps us healthy.', 'நடைப்பயிற்சி நம்மை ஆரோக்கியமாக வைக்கிறது.']] },
  ]},
  { id: 'feelings', name: 'Feelings', tamil: 'உணர்வுகள்', emoji: '🌻', color: '#9a6fb0', words: [
    { word: 'Happy', split: 'Hap-py', tamilSound: 'ஹேப்-பி', tamil: 'மகிழ்ச்சி', meaning: 'Feeling pleased and joyful.', kind: 'Adjective', emoji: '😊', examples: [['I am very happy.', 'நான் மிகவும் மகிழ்ச்சியாக இருக்கிறேன்.'], ['You look happy.', 'நீங்கள் மகிழ்ச்சியாகத் தெரிகிறீர்கள்.'], ['This makes me happy.', 'இது என்னை மகிழ்ச்சிப்படுத்துகிறது.']] },
    { word: 'Sad', split: 'Sad', tamilSound: 'சேட்', tamil: 'சோகம்', meaning: 'Feeling unhappy.', kind: 'Adjective', emoji: '😔', examples: [['Why are you sad?', 'நீங்கள் ஏன் சோகமாக இருக்கிறீர்கள்?'], ['I feel sad today.', 'இன்று நான் சோகமாக உணர்கிறேன்.'], ['Do not be sad.', 'சோகமாக இருக்காதீர்கள்.']] },
    { word: 'Love', split: 'Love', tamilSound: 'லவ்', tamil: 'அன்பு', meaning: 'A strong feeling of care.', kind: 'Noun / Verb', emoji: '❤️', examples: [['I love my family.', 'நான் என் குடும்பத்தை நேசிக்கிறேன்.'], ['Love gives us strength.', 'அன்பு நமக்கு வலிமை தருகிறது.'], ['They love this place.', 'அவர்களுக்கு இந்த இடம் மிகவும் பிடிக்கும்.']] },
    { word: 'Tired', split: 'Tired', tamilSound: 'டையர்ட்', tamil: 'சோர்வாக', meaning: 'Needing rest or sleep.', kind: 'Adjective', emoji: '🥱', examples: [['I am tired now.', 'நான் இப்போது சோர்வாக இருக்கிறேன்.'], ['Are you tired?', 'நீங்கள் சோர்வாக இருக்கிறீர்களா?'], ['She looks tired.', 'அவள் சோர்வாகத் தெரிகிறாள்.']] },
    { word: 'Afraid', split: 'A-fraid', tamilSound: 'அ-ஃப்ரெய்ட்', tamil: 'பயமாக', meaning: 'Feeling fear or worry.', kind: 'Adjective', emoji: '😟', examples: [['Do not be afraid.', 'பயப்படாதீர்கள்.'], ['I am afraid of dogs.', 'எனக்கு நாய்களைக் கண்டால் பயம்.'], ['She feels afraid.', 'அவள் பயப்படுகிறாள்.']] },
    { word: 'Calm', split: 'Calm', tamilSound: 'காம்', tamil: 'அமைதியான', meaning: 'Peaceful and not worried.', kind: 'Adjective', emoji: '😌', examples: [['Please stay calm.', 'தயவுசெய்து அமைதியாக இருங்கள்.'], ['The room is calm.', 'அறை அமைதியாக உள்ளது.'], ['I feel calm now.', 'இப்போது நான் அமைதியாக உணர்கிறேன்.']] },
  ]},
  { id: 'places', name: 'Places & Directions', tamil: 'இடங்களும் திசைகளும்', emoji: '🧭', color: '#4f8f85', words: [
    { word: 'Here', split: 'Here', tamilSound: 'ஹியர்', tamil: 'இங்கே', meaning: 'In or at this place.', kind: 'Adverb', emoji: '📍', examples: [['Please come here.', 'தயவுசெய்து இங்கே வாருங்கள்.'], ['Keep the bag here.', 'பையை இங்கே வையுங்கள்.'], ['I live here.', 'நான் இங்கே வசிக்கிறேன்.']] },
    { word: 'Near', split: 'Near', tamilSound: 'நியர்', tamil: 'அருகில்', meaning: 'Not far away.', kind: 'Adjective / Adverb', emoji: '↔️', examples: [['The shop is near.', 'கடை அருகில் உள்ளது.'], ['Sit near me.', 'என் அருகில் உட்காருங்கள்.'], ['Is there a hospital near here?', 'இங்கே அருகில் மருத்துவமனை உள்ளதா?']] },
    { word: 'Left', split: 'Left', tamilSound: 'லெஃப்ட்', tamil: 'இடது', meaning: 'The direction opposite to right.', kind: 'Noun / Adjective', emoji: '⬅️', examples: [['Turn left here.', 'இங்கே இடதுபுறம் திரும்புங்கள்.'], ['It is on your left.', 'அது உங்கள் இடதுபுறத்தில் உள்ளது.'], ['Look to the left.', 'இடதுபுறம் பாருங்கள்.']] },
    { word: 'Right', split: 'Right', tamilSound: 'ரைட்', tamil: 'வலது / சரி', meaning: 'The direction opposite to left; also correct.', kind: 'Adjective', emoji: '➡️', examples: [['Turn right at the road.', 'சாலையில் வலதுபுறம் திரும்புங்கள்.'], ['Your answer is right.', 'உங்கள் பதில் சரியானது.'], ['The bank is on the right.', 'வங்கி வலதுபுறத்தில் உள்ளது.']] },
    { word: 'Road', split: 'Road', tamilSound: 'ரோட்', tamil: 'சாலை', meaning: 'A way for vehicles and people.', kind: 'Noun', emoji: '🛣️', examples: [['Cross the road carefully.', 'சாலையை கவனமாகக் கடக்கவும்.'], ['This road is busy.', 'இந்த சாலை பரபரப்பாக உள்ளது.'], ['The road is long.', 'சாலை நீளமாக உள்ளது.']] },
    { word: 'Shop', split: 'Shop', tamilSound: 'ஷாப்', tamil: 'கடை', meaning: 'A place where things are sold.', kind: 'Noun', emoji: '🏪', examples: [['I am going to the shop.', 'நான் கடைக்குப் போகிறேன்.'], ['The shop is open.', 'கடை திறந்திருக்கிறது.'], ['This shop sells fruit.', 'இந்தக் கடையில் பழங்கள் விற்கப்படுகின்றன.']] },
  ]},
  { id: 'actions', name: 'Everyday Actions', tamil: 'அன்றாட செயல்கள்', emoji: '✨', color: '#557ab0', words: [
    { word: 'Come', split: 'Come', tamilSound: 'கம்', tamil: 'வா', meaning: 'To move toward someone or something.', kind: 'Verb', emoji: '👋', examples: [['Please come inside.', 'தயவுசெய்து உள்ளே வாருங்கள்.'], ['Come with me.', 'என்னுடன் வாருங்கள்.'], ['Can you come tomorrow?', 'நீங்கள் நாளை வர முடியுமா?']] },
    { word: 'Go', split: 'Go', tamilSound: 'கோ', tamil: 'போ', meaning: 'To move to another place.', kind: 'Verb', emoji: '🚶', examples: [['Let us go now.', 'இப்போது நாம் போகலாம்.'], ['I go to work.', 'நான் வேலைக்குப் போகிறேன்.'], ['Go straight ahead.', 'நேராக முன்னால் செல்லுங்கள்.']] },
    { word: 'Speak', split: 'Speak', tamilSound: 'ஸ்பீக்', tamil: 'பேசு', meaning: 'To say words using your voice.', kind: 'Verb', emoji: '🗣️', examples: [['Please speak slowly.', 'தயவுசெய்து மெதுவாகப் பேசுங்கள்.'], ['I speak Tamil.', 'நான் தமிழ் பேசுகிறேன்.'], ['Can I speak to her?', 'நான் அவரிடம் பேசலாமா?']] },
    { word: 'Read', split: 'Read', tamilSound: 'ரீட்', tamil: 'படி', meaning: 'To look at and understand written words.', kind: 'Verb', emoji: '📖', examples: [['I read every day.', 'நான் தினமும் படிக்கிறேன்.'], ['Please read this word.', 'தயவுசெய்து இந்த வார்த்தையைப் படியுங்கள்.'], ['She can read English.', 'அவரால் ஆங்கிலம் படிக்க முடியும்.']] },
    { word: 'Listen', split: 'Lis-ten', tamilSound: 'லிஸ்-சன்', tamil: 'கேள்', meaning: 'To pay attention to a sound.', kind: 'Verb', emoji: '👂', examples: [['Listen to me.', 'நான் சொல்வதைக் கேளுங்கள்.'], ['Please listen carefully.', 'தயவுசெய்து கவனமாகக் கேளுங்கள்.'], ['I listen to music.', 'நான் இசை கேட்கிறேன்.']] },
    { word: 'Wait', split: 'Wait', tamilSound: 'வெய்ட்', tamil: 'காத்திரு', meaning: 'To stay until something happens.', kind: 'Verb', emoji: '⏳', examples: [['Please wait here.', 'தயவுசெய்து இங்கே காத்திருங்கள்.'], ['Wait for five minutes.', 'ஐந்து நிமிடங்கள் காத்திருங்கள்.'], ['I will wait for you.', 'நான் உங்களுக்காகக் காத்திருப்பேன்.']] },
  ]},
];

function speak(text: string, slow = false) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-IN'; utterance.rate = slow ? 0.58 : 0.82; utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

export default function Home() {
  const [view, setView] = useState<'home' | 'lesson' | 'quiz'>('home');
  const [categoryId, setCategoryId] = useState('food');
  const [wordIndex, setWordIndex] = useState(0);
  const [learned, setLearned] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [speechFeedback, setSpeechFeedback] = useState('');
  const [quizFeedback, setQuizFeedback] = useState('');
  useEffect(() => { try { setLearned(JSON.parse(localStorage.getItem('vanakkam-learned') || '[]')); setLargeText(localStorage.getItem('vanakkam-large-text') === 'true'); } catch { setLearned([]); } setLoaded(true); }, []);
  const category = categories.find((item) => item.id === categoryId) || categories[0];
  const word = category.words[wordIndex] || category.words[0];
  const totalWords = categories.reduce((sum, item) => sum + item.words.length, 0);
  const progress = Math.round((learned.length / 500) * 100);
  const learnedInCategory = useMemo(() => category.words.filter((item) => learned.includes(`${category.id}:${item.word}`)).length, [category, learned]);
  void learnedInCategory;

  const openCategory = (id: string) => { const nextCategory = categories.find((item) => item.id === id)!; const firstNew = nextCategory.words.findIndex((item) => !learned.includes(`${id}:${item.word}`)); setCategoryId(id); setWordIndex(firstNew < 0 ? 0 : firstNew); setView('lesson'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const toggleLearned = () => { const key = `${category.id}:${word.word}`; const next = learned.includes(key) ? learned.filter((item) => item !== key) : [...learned, key]; setLearned(next); localStorage.setItem('vanakkam-learned', JSON.stringify(next)); };
  const nextWord = () => { if (wordIndex === 4) { setQuizFeedback(''); setView('quiz'); } else if (wordIndex < category.words.length - 1) setWordIndex(wordIndex + 1); else setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const toggleTextSize = () => { const next = !largeText; setLargeText(next); localStorage.setItem('vanakkam-large-text', String(next)); };
  const practiceSpeech = () => {
    setSpeechFeedback('கேட்கிறேன்… இப்போது சொல்லுங்கள்');
    const speechWindow = window as typeof window & { webkitSpeechRecognition?: new () => { lang: string; interimResults: boolean; start: () => void; onresult: (event: { results: { 0: { 0: { transcript: string } } }[] }) => void; onerror: () => void } };
    if (!speechWindow.webkitSpeechRecognition) { setSpeechFeedback('இந்த சாதனத்தில் பேசும் பயிற்சி கிடைக்கவில்லை. கேட்டு மீண்டும் சொல்லுங்கள்.'); speak(word.word, true); return; }
    const recognition = new speechWindow.webkitSpeechRecognition(); recognition.lang = 'en-IN'; recognition.interimResults = false;
    recognition.onresult = (event) => { const heard = event.results[0][0].transcript.toLowerCase().trim(); setSpeechFeedback(heard.includes(word.word.toLowerCase()) ? 'மிக நன்று! சரியாகச் சொன்னீர்கள்! ✓' : `“${heard}” என்று கேட்டது. இன்னும் ஒருமுறை முயற்சி செய்யலாம்.`); };
    recognition.onerror = () => setSpeechFeedback('பரவாயில்லை. கேட்டு இன்னும் ஒருமுறை முயற்சி செய்யுங்கள்.'); recognition.start();
  };

  if (view === 'quiz') {
    const quizWord = category.words[4];
    const options = [quizWord, category.words[1], category.words[3]];
    return <main className={`app-shell quiz-shell ${largeText ? 'large-text' : ''}`}>
      <header className="topbar home-topbar"><button className="brand" onClick={() => setView('home')}><span className="brand-mark">வ</span><span><b>வணக்கம் English</b><small>சிறிய மறுபயிற்சி</small></span></button><button className="home-button" onClick={() => setView('home')}>⌂ <span>முகப்பு</span></button></header>
      <section className="quiz-card"><span className="quiz-badge">5 வார்த்தைகள் முடிந்தது! · QUICK REVIEW</span><div className="quiz-celebrate">🌟</div><h1>“{quizWord.word}” என்பதன்<br/>தமிழ் பொருள் என்ன?</h1><button className="quiz-listen" onClick={() => speak(quizWord.word, true)}>🔊 வார்த்தையை கேளுங்கள்</button>
        <div className="quiz-options">{options.map((option) => <button key={option.word} disabled={!!quizFeedback} onClick={() => setQuizFeedback(option.word === quizWord.word ? 'சரியான பதில்! மிக நன்று! ✓' : `இன்னும் கொஞ்சம் முயற்சி செய்வோம். சரியான பதில்: ${quizWord.tamil}`)}><span>{option.emoji}</span>{option.tamil}</button>)}</div>
        {quizFeedback && <div className={`quiz-feedback ${quizFeedback.includes('சரியான') ? 'correct' : ''}`} role="status">{quizFeedback}<button onClick={() => { setWordIndex(5); setView('lesson'); }}>அடுத்த வார்த்தை →</button></div>}
      </section>
    </main>;
  }

  if (view === 'lesson') {
    const isLearned = learned.includes(`${category.id}:${word.word}`);
    return <main className={`app-shell lesson-shell ${largeText ? 'large-text' : ''}`}>
      <header className="topbar">
        <button className="brand" onClick={() => setView('home')} aria-label="முகப்பு பக்கத்திற்குச் செல்லவும்"><span className="brand-mark">வ</span><span><b>வணக்கம் English</b><small>ஒவ்வொரு நாளும் ஒரு சிறிய முன்னேற்றம்</small></span></button>
        <div className="lesson-progress"><span>{category.tamil}</span><div><i style={{ width: `${((wordIndex + 1) / category.words.length) * 100}%` }} /></div><b>{wordIndex + 1} / {category.words.length}</b></div>
        <button className="home-button" onClick={() => setView('home')}>⌂ <span>முகப்பு</span></button>
      </header>
      <section className="lesson-wrap">
        <div className="word-visual" aria-label={`Picture for ${word.word}`}><span className="picture-label">படம் · PICTURE</span><div className="big-emoji" role="img" aria-label={word.word}>{word.emoji}</div><span className="visual-word">{word.word}</span></div>
        <article className="word-card">
          <div className="word-heading"><div><span className="eyebrow">இன்றைய வார்த்தை · TODAY’S WORD</span><h1>{word.word}</h1><p className="split-word">{word.split}</p><p className="tamil-sound">தமிழில் உச்சரிப்பு: <b>{word.tamilSound}</b></p></div>
            <div className="speech-buttons"><button onClick={() => speak(word.word)}><span>🔊</span> கேளுங்கள்<small>Listen</small></button><button onClick={() => speak(word.word, true)}><span>🐢</span> மெதுவாக<small>Slow</small></button></div></div>
          <div className="meaning-grid"><div className="tamil-meaning"><span>தமிழ் பொருள்</span><strong>{word.tamil}</strong></div><div><span>Simple English</span><strong>{word.meaning}</strong><small>{word.kind}</small></div></div>
          <section className="examples"><div className="section-title"><span>பயன்படுத்திப் பார்ப்போம்</span><b>Let’s use the word</b></div>{word.examples.map(([english, tamil], index) => <div className="example-row" key={english}><span className="example-number">{index + 1}</span><div><p>{english}</p><span>{tamil}</span></div><button onClick={() => speak(english, true)} aria-label={`Listen to: ${english}`}>🔊</button></div>)}</section>
          <section className="speak-practice"><div><span>🎙️ பேசிப் பழகுங்கள்</span><small>Speak the word aloud</small></div><button onClick={practiceSpeech}>மைக் அழுத்திப் பேசுங்கள்</button>{speechFeedback && <p role="status">{speechFeedback}</p>}</section>
        </article>
      </section>
      <nav className="lesson-actions"><button className="previous" disabled={wordIndex === 0} onClick={() => setWordIndex(Math.max(0, wordIndex - 1))}>← <span>முந்தையது<small>Previous</small></span></button><button className={`learned-button ${isLearned ? 'done' : ''}`} onClick={toggleLearned}>{isLearned ? '✓' : '○'} <span>{isLearned ? 'கற்றுக்கொண்டேன்!' : 'கற்றதாகக் குறி'}<small>{isLearned ? 'Learned' : 'Mark as learned'}</small></span></button><button className="next" onClick={nextWord}><span>{wordIndex === category.words.length - 1 ? 'முடிக்கவும்' : 'அடுத்தது'}<small>{wordIndex === category.words.length - 1 ? 'Finish' : 'Next word'}</small></span> →</button></nav>
    </main>;
  }

  return <main className={`app-shell ${largeText ? 'large-text' : ''}`}>
    <header className="topbar home-topbar"><div className="brand static"><span className="brand-mark">வ</span><span><b>வணக்கம் English</b><small>தமிழில் எளிதாக ஆங்கிலம் கற்போம்</small></span></div><div className="top-actions"><button aria-label="Text size" aria-pressed={largeText} onClick={toggleTextSize}>அ A</button><button aria-label="Test sound" onClick={() => speak('Welcome. Let us learn English.')}>🔊</button></div></header>
    <section className="welcome"><div><span className="eyebrow">வணக்கம்! இன்று கற்கத் தயாரா?</span><h1>சிறு சிறு வார்த்தைகள்.<br/><em>பெரிய தன்னம்பிக்கை.</em></h1><p>தினமும் 5 வார்த்தைகள் கற்போம். கேளுங்கள், படியுங்கள், நம்பிக்கையுடன் பேசுங்கள்.</p><button className="primary-cta" onClick={() => openCategory('food')}>இன்றைய பாடத்தை தொடங்குங்கள் <span>→</span><small>Start today’s lesson</small></button></div><div className="daily-card"><span className="sun">☀️</span><div><small>இன்றைய இலக்கு</small><b>5 வார்த்தைகள்</b><span>Daily goal</span></div><div className="goal-ring"><strong>{learned.length}</strong><span>/ 5</span></div></div></section>
    <section className="progress-strip"><div><span className="progress-icon">🌱</span><p><small>மொத்த முன்னேற்றம்</small><b>{loaded ? learned.length : 0} <span>/ 500 வார்த்தைகள்</span></b></p></div><div className="wide-progress"><i style={{ width: `${progress}%` }} /></div><p className="encouragement">{learned.length ? 'அருமையான முன்னேற்றம்!' : 'முதல் வார்த்தையிலிருந்து தொடங்கலாம்!'}<small>{learned.length ? 'Wonderful progress!' : 'Let’s begin with the first word!'}</small></p></section>
    <section className="categories-section"><div className="section-heading"><div><span className="eyebrow">உங்களுக்கு பிடித்த தலைப்பை தேர்ந்தெடுங்கள்</span><h2>வகைகள் <em>· Categories</em></h2></div><span>{totalWords} பாட வார்த்தைகள் தயாராக உள்ளன</span></div><div className="category-grid">{categories.map((item) => { const count = item.words.filter((entry) => learned.includes(`${item.id}:${entry.word}`)).length; return <button className="category-card" style={{ '--accent': item.color } as React.CSSProperties} key={item.id} onClick={() => openCategory(item.id)}><span className="category-emoji">{item.emoji}</span><span className="category-copy"><strong>{item.tamil}</strong><b>{item.name}</b><small>{item.words.length} வார்த்தைகள் · {count} முடிந்தது</small></span><span className="category-arrow">→</span><span className="category-progress"><i style={{ width: `${(count / item.words.length) * 100}%` }} /></span></button>; })}</div></section>
    <footer><span>வணக்கம் English</span><p>மெதுவாக கற்போம். நம்பிக்கையுடன் பேசுவோம்.</p><small>Learn gently. Speak confidently.</small></footer>
  </main>;
}
