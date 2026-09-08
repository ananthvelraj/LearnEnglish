export type VerbType = {
  name: string;
  tamil: string;
  explanation: string;
  example: string;
  exampleTamil: string;
  emoji: string;
};

export type VerbFormExplanation = {
  form: string;
  name: string;
  tamil: string;
  rule: string;
  example: string;
};

export type VerbForm = {
  tamil: string;
  v1: string;
  v2: string;
  v3: string;
  v4: string;
  v5: string;
  tamilForms: [string, string, string, string, string];
  exampleTail: string;
  exampleTamil: string;
  examples?: [string, string][];
};

export const verbTypes: VerbType[] = [
  { name: 'Action Verb', tamil: 'செயல் வினைச்சொல்', explanation: 'ஒரு செயலைக் குறிக்கும் வினைச்சொல்.', example: 'She writes a letter.', exampleTamil: 'அவள் ஒரு கடிதம் எழுதுகிறாள்.', emoji: '🏃' },
  { name: 'Helping Verb', tamil: 'துணை வினைச்சொல்', explanation: 'முக்கிய வினைச்சொல்லுக்கு காலம் அல்லது நிலையைத் தெரிவிக்க உதவும்.', example: 'She is writing.', exampleTamil: 'அவள் எழுதிக்கொண்டிருக்கிறாள்.', emoji: '🤝' },
  { name: 'Linking Verb', tamil: 'இணைப்பு வினைச்சொல்', explanation: 'எழுவாயை அதன் தன்மை அல்லது நிலையுடன் இணைக்கும்.', example: 'The flower is beautiful.', exampleTamil: 'அந்த மலர் அழகாக இருக்கிறது.', emoji: '🔗' },
  { name: 'Transitive Verb', tamil: 'செயப்படுபொருள் குன்றா வினை', explanation: 'செயலைப் பெற ஒரு object தேவைப்படும் வினைச்சொல்.', example: 'I opened the door.', exampleTamil: 'நான் கதவைத் திறந்தேன்.', emoji: '➡️' },
  { name: 'Intransitive Verb', tamil: 'செயப்படுபொருள் குன்றிய வினை', explanation: 'object இல்லாமலேயே முழுப் பொருள் தரும் வினைச்சொல்.', example: 'The baby sleeps.', exampleTamil: 'குழந்தை தூங்குகிறது.', emoji: '🌙' },
  { name: 'Regular Verb', tamil: 'ஒழுங்கான வினைச்சொல்', explanation: 'V2, V3 வடிவங்களில் பொதுவாக “-ed” சேரும்.', example: 'Work → worked → worked', exampleTamil: 'வேலை செய் → வேலை செய்தார்', emoji: '✅' },
  { name: 'Irregular Verb', tamil: 'ஒழுங்கற்ற வினைச்சொல்', explanation: 'V2, V3 வடிவங்கள் விதிப்படி அல்லாமல் மாறும்.', example: 'Go → went → gone', exampleTamil: 'போ → சென்றார் → சென்றிருக்கிறார்', emoji: '🔄' },
  { name: 'Modal Verb', tamil: 'முறைத் துணை வினைச்சொல்', explanation: 'திறன், அனுமதி, கடமை அல்லது வாய்ப்பைக் காட்டும்.', example: 'I can speak English.', exampleTamil: 'என்னால் ஆங்கிலம் பேச முடியும்.', emoji: '💡' },
];

export const verbFormExplanations: VerbFormExplanation[] = [
  { form: 'V1', name: 'Base / Present', tamil: 'அடிப்படை / நிகழ்கால வடிவம்', rule: 'I, You, We, They உடனும் can, will, must, to ஆகியவற்றுக்குப் பின்னும் V1 வரும்.', example: 'I go. · They eat. · I can speak.' },
  { form: 'V2', name: 'Simple Past', tamil: 'எளிய கடந்தகால வடிவம்', rule: 'ஏற்கனவே முடிந்த செயலைச் சொல்ல V2 பயன்படுத்துகிறோம். எல்லா subject-களுடனும் ஒரே வடிவம்.', example: 'I went yesterday. · She ate rice.' },
  { form: 'V3', name: 'Past Participle', tamil: 'கடந்தகால வினையெச்ச வடிவம்', rule: 'have, has, had ஆகியவற்றுக்குப் பின்னும் passive sentence-களிலும் V3 வரும்.', example: 'I have gone. · The letter was written.' },
  { form: 'V4', name: '-ing Form', tamil: 'தொடர்ச்சியான செயல் வடிவம்', rule: 'நடந்துகொண்டிருக்கும் செயலைச் சொல்ல am, is, are, was, were ஆகியவற்றுக்குப் பின் V4 வரும்.', example: 'She is reading. · They were playing.' },
  { form: 'V5', name: 's / es Form', tamil: 'ஒருமை நிகழ்கால வடிவம்', rule: 'நிகழ்காலத்தில் He, She, It அல்லது ஒருமை பெயர்ச்சொல்லுடன் V5 வரும்.', example: 'He goes. · She studies. · It works.' },
];

export const verbForms: VerbForm[] = [
  { tamil: 'போ / செல்', v1: 'go', v2: 'went', v3: 'gone', v4: 'going', v5: 'goes', tamilForms: ['செல்கிறேன்', 'சென்றேன்', 'சென்றிருக்கிறேன்', 'சென்றுகொண்டிருக்கிறேன்', 'செல்கிறாள்'], exampleTail: 'to work', exampleTamil: 'வேலைக்கு' },
  { tamil: 'வா', v1: 'come', v2: 'came', v3: 'come', v4: 'coming', v5: 'comes', tamilForms: ['வருகிறேன்', 'வந்தேன்', 'வந்திருக்கிறேன்', 'வந்துகொண்டிருக்கிறேன்', 'வருகிறாள்'], exampleTail: 'home', exampleTamil: 'வீட்டிற்கு' },
  { tamil: 'சாப்பிடு', v1: 'eat', v2: 'ate', v3: 'eaten', v4: 'eating', v5: 'eats', tamilForms: ['சாப்பிடுகிறேன்', 'சாப்பிட்டேன்', 'சாப்பிட்டிருக்கிறேன்', 'சாப்பிட்டுக்கொண்டிருக்கிறேன்', 'சாப்பிடுகிறாள்'], exampleTail: 'rice', exampleTamil: 'சாதம்' },
  { tamil: 'குடி', v1: 'drink', v2: 'drank', v3: 'drunk', v4: 'drinking', v5: 'drinks', tamilForms: ['குடிக்கிறேன்', 'குடித்தேன்', 'குடித்திருக்கிறேன்', 'குடித்துக்கொண்டிருக்கிறேன்', 'குடிக்கிறாள்'], exampleTail: 'water', exampleTamil: 'தண்ணீர்' },
  { tamil: 'எழுது', v1: 'write', v2: 'wrote', v3: 'written', v4: 'writing', v5: 'writes', tamilForms: ['எழுதுகிறேன்', 'எழுதினேன்', 'எழுதியிருக்கிறேன்', 'எழுதிக்கொண்டிருக்கிறேன்', 'எழுதுகிறாள்'], exampleTail: 'a letter', exampleTamil: 'ஒரு கடிதம்' },
  { tamil: 'படி', v1: 'read', v2: 'read', v3: 'read', v4: 'reading', v5: 'reads', tamilForms: ['படிக்கிறேன்', 'படித்தேன்', 'படித்திருக்கிறேன்', 'படித்துக்கொண்டிருக்கிறேன்', 'படிக்கிறாள்'], exampleTail: 'the book', exampleTamil: 'புத்தகத்தை' },
  { tamil: 'பேசு', v1: 'speak', v2: 'spoke', v3: 'spoken', v4: 'speaking', v5: 'speaks', tamilForms: ['பேசுகிறேன்', 'பேசினேன்', 'பேசியிருக்கிறேன்', 'பேசிக்கொண்டிருக்கிறேன்', 'பேசுகிறாள்'], exampleTail: 'English', exampleTamil: 'ஆங்கிலம்' },
  { tamil: 'பார்', v1: 'see', v2: 'saw', v3: 'seen', v4: 'seeing', v5: 'sees', tamilForms: ['பார்க்கிறேன்', 'பார்த்தேன்', 'பார்த்திருக்கிறேன்', 'பார்த்துக்கொண்டிருக்கிறேன்', 'பார்க்கிறாள்'], exampleTail: 'the doctor', exampleTamil: 'மருத்துவரை' },
  { tamil: 'செய்', v1: 'do', v2: 'did', v3: 'done', v4: 'doing', v5: 'does', tamilForms: ['செய்கிறேன்', 'செய்தேன்', 'செய்திருக்கிறேன்', 'செய்துகொண்டிருக்கிறேன்', 'செய்கிறாள்'], exampleTail: 'the work', exampleTamil: 'வேலையை' },
  { tamil: 'வைத்திரு / உள்ளது', v1: 'have', v2: 'had', v3: 'had', v4: 'having', v5: 'has', tamilForms: ['வைத்திருக்கிறேன்', 'வைத்திருந்தேன்', 'வைத்திருந்திருக்கிறேன்', 'அனுபவித்துக்கொண்டிருக்கிறேன்', 'வைத்திருக்கிறாள்'], exampleTail: 'lunch', exampleTamil: 'மதிய உணவை', examples: [['I have lunch at one.', 'நான் ஒரு மணிக்கு மதிய உணவு சாப்பிடுகிறேன்.'], ['I had lunch early.', 'நான் மதிய உணவை சீக்கிரம் சாப்பிட்டேன்.'], ['I have had lunch already.', 'நான் ஏற்கனவே மதிய உணவு சாப்பிட்டுவிட்டேன்.'], ['I am having lunch now.', 'நான் இப்போது மதிய உணவு சாப்பிட்டுக்கொண்டிருக்கிறேன்.'], ['She has lunch at one.', 'அவள் ஒரு மணிக்கு மதிய உணவு சாப்பிடுகிறாள்.']] },
  { tamil: 'உருவாக்கு / செய்', v1: 'make', v2: 'made', v3: 'made', v4: 'making', v5: 'makes', tamilForms: ['செய்கிறேன்', 'செய்தேன்', 'செய்திருக்கிறேன்', 'செய்துகொண்டிருக்கிறேன்', 'செய்கிறாள்'], exampleTail: 'tea', exampleTamil: 'தேநீர்' },
  { tamil: 'எடு', v1: 'take', v2: 'took', v3: 'taken', v4: 'taking', v5: 'takes', tamilForms: ['எடுக்கிறேன்', 'எடுத்தேன்', 'எடுத்திருக்கிறேன்', 'எடுத்துக்கொண்டிருக்கிறேன்', 'எடுக்கிறாள்'], exampleTail: 'the bus', exampleTamil: 'பேருந்தை' },
  { tamil: 'கொடு', v1: 'give', v2: 'gave', v3: 'given', v4: 'giving', v5: 'gives', tamilForms: ['கொடுக்கிறேன்', 'கொடுத்தேன்', 'கொடுத்திருக்கிறேன்', 'கொடுத்துக்கொண்டிருக்கிறேன்', 'கொடுக்கிறாள்'], exampleTail: 'some advice', exampleTamil: 'அறிவுரை' },
  { tamil: 'பெறு / கிடை', v1: 'get', v2: 'got', v3: 'got', v4: 'getting', v5: 'gets', tamilForms: ['பெறுகிறேன்', 'பெற்றேன்', 'பெற்றிருக்கிறேன்', 'பெற்றுக்கொண்டிருக்கிறேன்', 'பெறுகிறாள்'], exampleTail: 'a message', exampleTamil: 'ஒரு செய்தியை' },
  { tamil: 'கொண்டுவா', v1: 'bring', v2: 'brought', v3: 'brought', v4: 'bringing', v5: 'brings', tamilForms: ['கொண்டுவருகிறேன்', 'கொண்டுவந்தேன்', 'கொண்டுவந்திருக்கிறேன்', 'கொண்டுவந்துகொண்டிருக்கிறேன்', 'கொண்டுவருகிறாள்'], exampleTail: 'lunch', exampleTamil: 'மதிய உணவை' },
  { tamil: 'வாங்கு', v1: 'buy', v2: 'bought', v3: 'bought', v4: 'buying', v5: 'buys', tamilForms: ['வாங்குகிறேன்', 'வாங்கினேன்', 'வாங்கியிருக்கிறேன்', 'வாங்கிக்கொண்டிருக்கிறேன்', 'வாங்குகிறாள்'], exampleTail: 'vegetables', exampleTamil: 'காய்கறிகளை' },
  { tamil: 'கற்பி', v1: 'teach', v2: 'taught', v3: 'taught', v4: 'teaching', v5: 'teaches', tamilForms: ['கற்பிக்கிறேன்', 'கற்பித்தேன்', 'கற்பித்திருக்கிறேன்', 'கற்பித்துக்கொண்டிருக்கிறேன்', 'கற்பிக்கிறாள்'], exampleTail: 'English', exampleTamil: 'ஆங்கிலம்' },
  { tamil: 'கற்றுக்கொள்', v1: 'learn', v2: 'learned', v3: 'learned', v4: 'learning', v5: 'learns', tamilForms: ['கற்கிறேன்', 'கற்றேன்', 'கற்றிருக்கிறேன்', 'கற்றுக்கொண்டிருக்கிறேன்', 'கற்கிறாள்'], exampleTail: 'new words', exampleTamil: 'புதிய சொற்களை' },
  { tamil: 'ஓடு', v1: 'run', v2: 'ran', v3: 'run', v4: 'running', v5: 'runs', tamilForms: ['ஓடுகிறேன்', 'ஓடினேன்', 'ஓடியிருக்கிறேன்', 'ஓடிக்கொண்டிருக்கிறேன்', 'ஓடுகிறாள்'], exampleTail: 'in the park', exampleTamil: 'பூங்காவில்' },
  { tamil: 'நட', v1: 'walk', v2: 'walked', v3: 'walked', v4: 'walking', v5: 'walks', tamilForms: ['நடக்கிறேன்', 'நடந்தேன்', 'நடந்திருக்கிறேன்', 'நடந்துகொண்டிருக்கிறேன்', 'நடக்கிறாள்'], exampleTail: 'to school', exampleTamil: 'பள்ளிக்கு' },
  { tamil: 'உட்கார்', v1: 'sit', v2: 'sat', v3: 'sat', v4: 'sitting', v5: 'sits', tamilForms: ['உட்காருகிறேன்', 'உட்கார்ந்தேன்', 'உட்கார்ந்திருக்கிறேன்', 'உட்கார்ந்துகொண்டிருக்கிறேன்', 'உட்காருகிறாள்'], exampleTail: 'here', exampleTamil: 'இங்கே' },
  { tamil: 'நில்', v1: 'stand', v2: 'stood', v3: 'stood', v4: 'standing', v5: 'stands', tamilForms: ['நிற்கிறேன்', 'நின்றேன்', 'நின்றிருக்கிறேன்', 'நின்றுகொண்டிருக்கிறேன்', 'நிற்கிறாள்'], exampleTail: 'near the door', exampleTamil: 'கதவின் அருகில்' },
  { tamil: 'தூங்கு', v1: 'sleep', v2: 'slept', v3: 'slept', v4: 'sleeping', v5: 'sleeps', tamilForms: ['தூங்குகிறேன்', 'தூங்கினேன்', 'தூங்கியிருக்கிறேன்', 'தூங்கிக்கொண்டிருக்கிறேன்', 'தூங்குகிறாள்'], exampleTail: 'early', exampleTamil: 'சீக்கிரம்' },
  { tamil: 'விழித்தெழு', v1: 'wake', v2: 'woke', v3: 'woken', v4: 'waking', v5: 'wakes', tamilForms: ['விழிக்கிறேன்', 'விழித்தேன்', 'விழித்திருக்கிறேன்', 'விழித்துக்கொண்டிருக்கிறேன்', 'விழிக்கிறாள்'], exampleTail: 'at six', exampleTamil: 'ஆறு மணிக்கு' },
  { tamil: 'நினை / சிந்தி', v1: 'think', v2: 'thought', v3: 'thought', v4: 'thinking', v5: 'thinks', tamilForms: ['சிந்திக்கிறேன்', 'சிந்தித்தேன்', 'சிந்தித்திருக்கிறேன்', 'சிந்தித்துக்கொண்டிருக்கிறேன்', 'சிந்திக்கிறாள்'], exampleTail: 'about the lesson', exampleTamil: 'பாடத்தைப் பற்றி' },
  { tamil: 'தெரிந்திரு / அறி', v1: 'know', v2: 'knew', v3: 'known', v4: 'knowing', v5: 'knows', tamilForms: ['தெரியும்', 'தெரிந்திருந்தது', 'தெரிந்திருக்கிறது', 'தெரிந்திருப்பது', 'தெரியும்'], exampleTail: 'the answer', exampleTamil: 'பதிலை', examples: [['I know the answer.', 'எனக்குப் பதில் தெரியும்.'], ['I knew the answer yesterday.', 'நேற்று எனக்குப் பதில் தெரிந்திருந்தது.'], ['I have known the answer for a long time.', 'எனக்கு நீண்ட காலமாகப் பதில் தெரியும்.'], ['Knowing the answer is useful.', 'பதிலைத் தெரிந்திருப்பது பயனுள்ளது.'], ['She knows the answer.', 'அவளுக்குப் பதில் தெரியும்.']] },
  { tamil: 'சொல் / தெரிவி', v1: 'tell', v2: 'told', v3: 'told', v4: 'telling', v5: 'tells', tamilForms: ['சொல்கிறேன்', 'சொன்னேன்', 'சொல்லியிருக்கிறேன்', 'சொல்லிக்கொண்டிருக்கிறேன்', 'சொல்கிறாள்'], exampleTail: 'the truth', exampleTamil: 'உண்மையை' },
  { tamil: 'கூறு', v1: 'say', v2: 'said', v3: 'said', v4: 'saying', v5: 'says', tamilForms: ['கூறுகிறேன்', 'கூறினேன்', 'கூறியிருக்கிறேன்', 'கூறிக்கொண்டிருக்கிறேன்', 'கூறுகிறாள்'], exampleTail: 'hello', exampleTamil: 'வணக்கம் என்று' },
  { tamil: 'கண்டுபிடி', v1: 'find', v2: 'found', v3: 'found', v4: 'finding', v5: 'finds', tamilForms: ['கண்டுபிடிக்கிறேன்', 'கண்டுபிடித்தேன்', 'கண்டுபிடித்திருக்கிறேன்', 'கண்டுபிடித்துக்கொண்டிருக்கிறேன்', 'கண்டுபிடிக்கிறாள்'], exampleTail: 'the keys', exampleTamil: 'சாவிகளை' },
  { tamil: 'வை / காப்பாற்று', v1: 'keep', v2: 'kept', v3: 'kept', v4: 'keeping', v5: 'keeps', tamilForms: ['வைத்திருக்கிறேன்', 'வைத்திருந்தேன்', 'வைத்திருந்திருக்கிறேன்', 'வைத்துக்கொண்டிருக்கிறேன்', 'வைத்திருக்கிறாள்'], exampleTail: 'the room clean', exampleTamil: 'அறையைச் சுத்தமாக' },
  { tamil: 'உதவு', v1: 'help', v2: 'helped', v3: 'helped', v4: 'helping', v5: 'helps', tamilForms: ['உதவுகிறேன்', 'உதவினேன்', 'உதவியிருக்கிறேன்', 'உதவிக்கொண்டிருக்கிறேன்', 'உதவுகிறாள்'], exampleTail: 'my mother', exampleTamil: 'என் அம்மாவுக்கு' },
  { tamil: 'சமை', v1: 'cook', v2: 'cooked', v3: 'cooked', v4: 'cooking', v5: 'cooks', tamilForms: ['சமைக்கிறேன்', 'சமைத்தேன்', 'சமைத்திருக்கிறேன்', 'சமைத்துக்கொண்டிருக்கிறேன்', 'சமைக்கிறாள்'], exampleTail: 'dinner', exampleTamil: 'இரவு உணவை' },
  { tamil: 'விளையாடு', v1: 'play', v2: 'played', v3: 'played', v4: 'playing', v5: 'plays', tamilForms: ['விளையாடுகிறேன்', 'விளையாடினேன்', 'விளையாடியிருக்கிறேன்', 'விளையாடிக்கொண்டிருக்கிறேன்', 'விளையாடுகிறாள்'], exampleTail: 'chess', exampleTamil: 'சதுரங்கம்' },
  { tamil: 'வேலை செய்', v1: 'work', v2: 'worked', v3: 'worked', v4: 'working', v5: 'works', tamilForms: ['வேலை செய்கிறேன்', 'வேலை செய்தேன்', 'வேலை செய்திருக்கிறேன்', 'வேலை செய்துகொண்டிருக்கிறேன்', 'வேலை செய்கிறாள்'], exampleTail: 'at home', exampleTamil: 'வீட்டில்' },
  { tamil: 'வாழ் / வசிக்க', v1: 'live', v2: 'lived', v3: 'lived', v4: 'living', v5: 'lives', tamilForms: ['வசிக்கிறேன்', 'வசித்தேன்', 'வசித்திருக்கிறேன்', 'வசித்துக்கொண்டிருக்கிறேன்', 'வசிக்கிறாள்'], exampleTail: 'in Chennai', exampleTamil: 'சென்னையில்' },
  { tamil: 'அழை', v1: 'call', v2: 'called', v3: 'called', v4: 'calling', v5: 'calls', tamilForms: ['அழைக்கிறேன்', 'அழைத்தேன்', 'அழைத்திருக்கிறேன்', 'அழைத்துக்கொண்டிருக்கிறேன்', 'அழைக்கிறாள்'], exampleTail: 'my friend', exampleTamil: 'என் நண்பரை' },
  { tamil: 'திற', v1: 'open', v2: 'opened', v3: 'opened', v4: 'opening', v5: 'opens', tamilForms: ['திறக்கிறேன்', 'திறந்தேன்', 'திறந்திருக்கிறேன்', 'திறந்துகொண்டிருக்கிறேன்', 'திறக்கிறாள்'], exampleTail: 'the door', exampleTamil: 'கதவை' },
  { tamil: 'மூடு', v1: 'close', v2: 'closed', v3: 'closed', v4: 'closing', v5: 'closes', tamilForms: ['மூடுகிறேன்', 'மூடினேன்', 'மூடியிருக்கிறேன்', 'மூடிக்கொண்டிருக்கிறேன்', 'மூடுகிறாள்'], exampleTail: 'the window', exampleTamil: 'ஜன்னலை' },
  { tamil: 'கழுவு', v1: 'wash', v2: 'washed', v3: 'washed', v4: 'washing', v5: 'washes', tamilForms: ['கழுவுகிறேன்', 'கழுவினேன்', 'கழுவியிருக்கிறேன்', 'கழுவிக்கொண்டிருக்கிறேன்', 'கழுவுகிறாள்'], exampleTail: 'the clothes', exampleTamil: 'துணிகளை' },
  { tamil: 'படி / கல்', v1: 'study', v2: 'studied', v3: 'studied', v4: 'studying', v5: 'studies', tamilForms: ['படிக்கிறேன்', 'படித்தேன்', 'படித்திருக்கிறேன்', 'படித்துக்கொண்டிருக்கிறேன்', 'படிக்கிறாள்'], exampleTail: 'English', exampleTamil: 'ஆங்கிலம்' },
  { tamil: 'முயற்சி செய்', v1: 'try', v2: 'tried', v3: 'tried', v4: 'trying', v5: 'tries', tamilForms: ['முயற்சிக்கிறேன்', 'முயற்சித்தேன்', 'முயற்சித்திருக்கிறேன்', 'முயற்சித்துக்கொண்டிருக்கிறேன்', 'முயற்சிக்கிறாள்'], exampleTail: 'a new recipe', exampleTamil: 'ஒரு புதிய சமையல் முறையை' },
];
