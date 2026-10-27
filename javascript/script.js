        let currentCategory = 'online';

        const categoryData = {
            online: {
                placeholder: "مثال: سير تقود أنت لي مريض، انصح كرك هو الأول...",
                analysis: "في السوشيال ميديا، الشخص المعتدي كيحتمي وراء شاشة هاتف. الهدف ديالو الوحيد هو الاستفزاز ولفت الانتباه حيت كيعاني من الفراغ والإحباط.",
                defaultResponse: "التعبير ديالك كيعكس بالحرف حجم الحرمان والعقد النفسية لي كتعيشها. ملي كتعجز الحجة، كيبدا الشتم لتفريغ الإحباط. الله يشافيك."
            },
            street: {
                placeholder: "مثال: شخص سبك في الشارع ولا غوت عليك بالزنقاوية...",
                analysis: "فالشارع، المعتدي كيحاول يمارس هيمنة وهمية عن طريق الصوت المرتفع والألفاظ السوقية. الانفعال كيعطيه القوة، بينما البرود والنظرة المباشرة كترعبو.",
                defaultResponse: "(وقفة مستقيمة + عين بالعين): \"طريقة كلامك كتدل على التربية ديالك. كمل طريقك احسن لك.\" ثم تجاوز بدون صراخ."
            },
            work: {
                placeholder: "مثال: زميل كينقص منك ولا كيقشب بقلة احترام قدام الناس...",
                analysis: "في بيئة العمل ولا الدراسة، الاستفزاز كيكون غالباً خفي (Passive-Aggressive) والهدف منو كسر الهيبة ديالك قدام زملائك حيت حاس بالغيرة من نجاحك.",
                defaultResponse: "\"واش هاد الملاحظة عندها علاقة بالموضوع لي كنناقشوه، ولا غير محاولة فاشلة للفت الانتباه؟\""
            },
            family: {
                placeholder: "مثال: قريب ولا صديق قال ليك كلام قاصح فشي جلسة...",
                analysis: "مع الأقارب والأصدقاء، الهدف ماشي هو الحفاظ على الانتصار في الحرب، بل وضع حدود صارمة للكرامة ديالك بلا ما تخسر صلة الرحم ولا المعاملة.",
                defaultResponse: "\"أنا كنحترمك، وكنتسنى منك نفس الاحترام. هاد الطريقة ديال الكلام ما مقبولاش معايا إطلاقاً.\""
            }
        };

        function setLabCategory(cat) {
            currentCategory = cat;
            const buttons = ['online', 'street', 'work', 'family'];
            
            buttons.forEach(b => {
                const btn = document.getElementById(`btn-${b}`);
                if (b === cat) {
                    btn.className = "p-3 text-center rounded-xl bg-emerald-600 text-white text-xs font-bold transition flex flex-col items-center gap-1.5 shadow-lg shadow-emerald-600/20";
                } else {
                    btn.className = "p-3 text-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold transition flex flex-col items-center gap-1.5 hover:bg-slate-800";
                }
            });

            const input = document.getElementById('custom-attack');
            input.placeholder = categoryData[cat].placeholder;
            input.value = categoryData[cat].placeholder.replace("مثال: ", "");

            document.getElementById('output-analysis').innerText = categoryData[cat].analysis;
            document.getElementById('output-response').innerText = categoryData[cat].defaultResponse;
        }

        function generateCustomResponse() {
            const val = document.getElementById('custom-attack').value.trim();
            if (!val) {
                showToast("اكتب الكلام الاستفزازي أولاً!");
                return;
            }

            if (currentCategory === 'online') {
                document.getElementById('output-analysis').innerText = "تحليل السلوك: الكلام المكتوب كيبين ضعف الحجة والاعتماد على الشتم كوسيلة بدائية للتغطية على النقص.";
                document.getElementById('output-response').innerText = `"طريقة تعبيرك كتلخص تماماً المستوى والبيئة لي جيتي منها. ملي كيتنعدم المنطق، كيبقى السب هو الوسيلة الوحيدة إثبات الوجود. الله يشافيك."`;
            } else if (currentCategory === 'street') {
                document.getElementById('output-analysis').innerText = "تحليل السلوك: محاولة لتخويفك واستعراض القوة. السلاح الوحيد ديالك هو الثبات الانفعالي ونبرة الصوت الخفيضة والحازمة.";
                document.getElementById('output-response').innerText = `(برود تام ونظرة حازمة): "طريقة كلامك كتعكس قيمتك. ما كنزينش الهضرة مع الناس لي ما يحترموش راسهم."`;
            } else if (currentCategory === 'work') {
                document.getElementById('output-analysis').innerText = "تحليل السلوك: محاولة لإحراجك في إطار جماعي. الرد الكلاسيكي الذكي هو كشف النية الخفية أمام الحاضرين مباشرة.";
                document.getElementById('output-response').innerText = `"كنفضل نركزوا على العمل الهادف، بدلاً من هاد المقاطعات لي ما عندها حتى فائدة."`;
            } else {
                document.getElementById('output-analysis').innerText = "تحليل السلوك: تجاوز للحدود الشخصية تحت مسمى التقشاب ولا القرب. الحل هو قطع الطريق فوراً برزانة.";
                document.getElementById('output-response').innerText = `"أنا كنقدر العلاقات، ولكن الكرامة ديالي خط أحمر. نتمناو نحافظو على احترام متبادل."`;
            }

            showToast("تم تفكيك الرد بنجاح!");
        }

        function copyGeneratedText() {
            const text = document.getElementById('output-response').innerText;
            executeCopy(text);
        }

        function copyDirectText(button) {
            const text = button.previousElementSibling.querySelector('p').innerText;
            executeCopy(text);
        }

        function executeCopy(text) {
            const tempArea = document.createElement('textarea');
            tempArea.value = text;
            document.body.appendChild(tempArea);
            tempArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempArea);
            showToast("تم النسخ بنجاح!");
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = msg;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2500);
        }