import fetch from '@system.fetch';

export default {
    data: {
        uniquekey: '',
        detailObj: {
            "title": "广东湛江4名小学生意外溺亡 知情人：死者是堂兄弟姐妹",
            "date": "2021-08-10 10:57:00",
            "category": "头条",
            "author_name": "人民资讯",
            "url": "https://mini.eastday.com/mobile/210810105719286868789.html",
            "thumbnail_pic_s": "https://dfzximg02.dftoutiao.com/news/20210810/20210810105719_64d851e57d576630fd621839ce8bca32_1_mwpm_03201609.jpeg",
            "thumbnail_pic_s02": "https://dfzximg02.dftoutiao.com/news/20210810/20210810105719_64d851e57d576630fd621839ce8bca32_2_mwpm_03201609.jpeg",
            "thumbnail_pic_s03": "https://dfzximg02.dftoutiao.com/news/20210810/20210810105719_64d851e57d576630fd621839ce8bca32_3_mwpm_03201609.jpeg",
            "content": "<p >【#广东湛江4名小学生意外溺亡# 知情人：死者是堂兄弟姐妹】2021年8月8日，广东湛江廉江市石岭镇沙塘村。4名小学生在附近的水洼玩耍时，不幸全部溺亡。据悉，事发地为暴雨积水形成的水洼，水深达到2.5米。据村民透露，4个孩子为堂兄弟姐妹，最小7岁、最大11岁，当时一个孩子溺水了，其余的兄妹施救未果也溺亡了。</p><p >\n <img width='100%' src='https://dfzximg01.dftoutiao.com/news/20210810/20210810105719_64d851e57d576630fd621839ce8bca32_1.jpeg' data-weight='640' data-width='640' data-height='444'></p><p >\n <img width='100%' src='https://dfzximg01.dftoutiao.com/news/20210810/20210810105719_64d851e57d576630fd621839ce8bca32_2.jpeg' data-weight='640' data-width='640' data-height='416'></p><p >\n <img width='100%' src='https://dfzximg01.dftoutiao.com/news/20210810/20210810105719_64d851e57d576630fd621839ce8bca32_3.jpeg' data-weight='640' data-width='640' data-height='435'></p><p >来源：百姓关注</p>"
        }
    },
    onInit() {
        // 获取新闻详情
        console.log('uniquekey: '+this.uniquekey)

        this.getNewsDetail()
    },
    getNewsDetail() {
        const that = this
        const api = 'http://v.juhe.cn/toutiao/content';
        fetch.fetch({
            url: api+'?uniquekey='+this.uniquekey+'&key=e64a624ab1449b7b4ee4624feca369bc',
            method: 'GET',
            responseType: 'json',
            success: res => {
                console.log('666666666: '+JSON.stringify(res))
                if (res.code == 200) {
                    const target = JSON.parse(res.data)
                    that.detailObj = target.result.detail
                    that.detailObj.uniquekey = target.result.uniquekey
                    that.detailObj.content = target.result.content
                } else {
                    console.log('查询新闻失败')
                }
            }
        })
    }
}
