export const logicTest = [
    {
        question:
            'Andrea mengklaim, “saya pergi ke toko kue pada Sabtu sore atau Minggu siang”. Jika Andrea pergi ke toko kue pada Minggu siang, klaimnya masih mungkin salah. Pernyataan di atas bernilai ….',
        choices: {
            a: 'Benar',
            b: 'Mungkin benar',
            c: 'Salah',
            d: 'Mungkin salah',
            e: 'Tidak dapat ditentukan',
        },
        answer: 'c',
    },
    {
        question:
            'Gilang berkata, “Saya ada ujian di hari Senin dan Selasa”. Gilang mungkin salah meskipun dia ada ujian pada hari Senin. Pernyataan di atas bernilai ….',
        choices: {
            a: 'Benar',
            b: 'Mungkin benar',
            c: 'Salah',
            d: 'Mungkin salah',
            e: 'Tidak dapat ditentukan',
        },
        answer: 'a',
    },
    {
        question:
            'Jess mengklaim, “saya mengembalikan buku milik Doni pada Senin malam atau Selasa pagi”. Jika Jess mengembalikan buku pada Selasa siang, maka klaimnya salah. Pernyataan di atas bernilai ….',
        choices: {
            a: 'Benar',
            b: 'Mungkin benar',
            c: 'Salah',
            d: 'Mungkin salah',
            e: 'Tidak dapat ditentukan',
        },
        answer: 'a',
    },
    {
        question:
            '“AC Milan akan menang Seri A hanya jika performanya bagus dan Juventus kehilangan Ronaldo”. Manakah pernyataan yang valid?',
        choices: {
            a: 'Performa AC Milan tidak bagus. Jadi, AC Milan tidak menang Seri A.',
            b: 'Performa AC Milan bagus. Jadi, AC Milan menang Seri A.',
            c: 'Performa AC Milan bagus dan Juventus kehilangan Ronaldo. Jadi, AC Milan menang Seri A.',
            d: 'AC Milan tidak menang Seri A. Jadi, performanya tidak bagus atau Juventus tidak kehilangan Ronaldo.',
            e: 'Semua pernyataan tidak valid.',
        },
        answer: 'a',
    },
    {
        question:
            'Jika Drian menyelesaikan tugasnya hari Kamis, dia akan bermain game pada Jumat atau Sabtu.”. Manakah pernyataan yang valid?',
        choices: {
            a: 'Drian tidak bermain game di hari Sabtu. Jadi, dia tidak menyelesaikan tugasnya di hari Kamis',
            b: 'Drian bermain game di hari Jumat dan Sabtu. Jadi, dia menyelesaikan tugasnya hari Kamis.',
            c: 'Drian menyelesaikan tugasnya hari Kamis. Jadi, dia bermain game hari Sabtu.',
            d: 'Drian menyelesaikan tugasnya hari Kamis dan bermain game hari Sabtu. Jadi, dia tidak main game hari Jumat.',
            e: 'Semua pernyataan tidak valid.',
        },
        answer: 'c',
    },
]

export const tests = [
    {
        id: 'logika-matematika',
        title: 'Tes Logika Matematika',
        time: '1 Dec, 07:15 - 9:15',
        duration: '2 Jam',
        status: 'live',
        questionsLength: logicTest.length,
        questions: logicTest,
    },
    {
        id: 'mtk-wajib',
        title: 'PAS Matematika Wajib Kelas 12',
        time: '1 Dec, 09:30 - 11:30',
        duration: '2 Jam',
        status: 'upcoming',
        questionsLength: 30,
    },
]
