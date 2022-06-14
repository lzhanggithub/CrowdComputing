<template>
    <div id="app">
        <div class="main">
            <div class="head" id="head">
                <avataaars
                    ref="avatar"
                    :isCircle="istrue"
                    :circleColor="circleColor"
                    :clotheType="'Hoodie'"
                    :accessoriesType="'Blank'"
                    :skinColor="skinColor"
                    :clotheColor="'Blue01'"
                    :eyebrowType="'DefaultNatural'"
                    :eyeType="'Default'"
                    :topType="topType"
                    :facialHairColor="facialHairColor"
                    :mouthType="mouthType"
                    :facialHairType="facialHairType"
                    :graphicType="'Cumbia'"
                    :hairColor="hairColor"
                >
                </avataaars>
            </div>
            <el-form ref="form" label-width="80px">
                <el-form-item label="isCircle">
                    <el-radio v-model="istrue" :label="true">Circle</el-radio>
                    <el-radio v-model="istrue" :label="false"
                        >Transparent
                    </el-radio>
                </el-form-item>

                <el-form-item label="circleColor">
                    <el-color-picker v-model="circleColor"></el-color-picker>
                </el-form-item>

                
                <el-form-item label="skinColor">
                    <el-select
                        v-model="skinColor"
                        @change="handleChange"
                        placeholder="Select Skin Color"
                    >
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="topType">
                    <el-select
                        v-model="topType"
                        @change="handleChange"
                        placeholder="Select Top Type"
                    >
                        <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="hairColor">
                    <el-select
                        v-model="hairColor"
                        @change="handleChange"
                        placeholder="Select Hair Color"
                    >
                        <el-option
                            v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="mouthType">
                    <el-select
                        v-model="mouthType"
                        @change="handleChange"
                        placeholder="Select Mouth Type"
                    >
                        <el-option
                            v-for="item in options4"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="facialHairType">
                    <el-select
                        v-model="facialHairType"
                        @change="handleChange"
                        placeholder="Select Facial Hair Type"
                    >
                        <el-option
                            v-for="item in options5"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="facialHairColor">
                    <el-select
                        v-model="facialHairColor"
                        @change="handleChange"
                        placeholder="Select Facial Hair Color"
                    >
                        <el-option
                            v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>

            
                <el-button type="primary" @click="exportPic('head')"
                    >download</el-button
                >
            </el-form>
        </div>
    </div>
</template>

<script>
import Avataaars from "vuejs-avataaars";
// import html2Canvas from "html2canvas";
export default {
    name: "App",
    components: {
        Avataaars,
    },
    data() {
        return {
            istrue: true,
            circleColor: "#6fb8e0",
            skinColor:"Pale",
            topType: "NoHair",
            hairColor: "Black",
            mouthType: "Default",
            facialHairType: "Blank",
            facialHairColor: "Black",
            
            options3:[
                { labal: "Auburn", value: "Auburn" },
                { labal: "Black", value: "Black" },
                { labal: "Blonde", value: "Blonde" },
                { labal: "BlondeGolden", value: "BlondeGolden" },
                { labal: "Brown", value: "Brown" },
                { labal: "BrownDark", value: "BrownDark" },
                { labal: "PastelPink", value: "PastelPink" },
                { labal: "Platinum", value: "Platinum" },
                { labal: "Red", value: "Red" },
                { labal: "SilverGray", value: "SilverGray" },
            ],
            
            
            
            options1:[
                { labal: "Tanned", value: "Tanned" },
                { labal: "Yellow", value: "Yellow" },
                { labal: "Pale", value: "Pale" },
                { labal: "Light", value: "Light" },
                { labal: "Brown", value: "Brown" },
                { labal: "DarkBrown", value: "DarkBrown" },
                { labal: "Black", value: "Black" },
            ],
            options2:[
                { labal: "NoHair", value: "NoHair" },
                { labal: "Eyepatch", value: "Eyepatch" },
                { labal: "Hat", value: "Hat" },
                { labal: "Hijab", value: "Hijab" },
                { labal: "Turban", value: "Turban" },
                { labal: "WinterHat1", value: "WinterHat1" },
                { labal: "WinterHat2", value: "WinterHat2" },
                { labal: "WinterHat3", value: "WinterHat3" },
                { labal: "WinterHat4", value: "WinterHat4" },
                { labal: "LongHairBigHair", value: "LongHairBigHair" },
                { labal: "LongHairBob", value: "LongHairBob" },
                { labal: "LongHairBun", value: "LongHairBun" },
                { labal: "LongHairCurly", value: "LongHairCurly" },
                { labal: "LongHairCurvy", value: "LongHairCurvy" },
                { labal: "LongHairDreads", value: "LongHairDreads" },
                { labal: "LongHairFrida", value: "LongHairFrida" },
                { labal: "LongHairFro", value: "LongHairFro" },
                { labal: "LongHairFroBand", value: "LongHairFroBand" },
                { labal: "LongHairNotTooLong", value: "LongHairNotTooLong" },
                { labal: "LongHairShavedSides", value: "LongHairShavedSides" },
                { labal: "LongHairMiaWallace", value: "LongHairMiaWallace" },
                { labal: "LongHairStraight", value: "LongHairStraight" },
                { labal: "LongHairStraight2", value: "LongHairStraight2" },
                { labal: "LongHairStraightStrand", value: "LongHairStraightStrand" },
                { labal: "ShortHairDreads01", value: "ShortHairDreads01" },
                { labal: "ShortHairDreads02", value: "ShortHairDreads02" },
                { labal: "ShortHairFrizzle", value: "ShortHairFrizzle" },
                { labal: "ShortHairShaggyMullet", value: "ShortHairShaggyMullet" },
                { labal: "ShortHairShortCurly", value: "ShortHairShortCurly" },
                { labal: "ShortHairShortFlat", value: "ShortHairShortFlat" },
                { labal: "ShortHairShortRound", value: "ShortHairShortRound" },
                { labal: "ShortHairShortWaved", value: "ShortHairShortWaved" },
                { labal: "ShortHairSides", value: "ShortHairSides" },
                { labal: "ShortHairTheCaesar", value: "ShortHairTheCaesar" },
                { labal: "ShortHairTheCaesarSidePart", value: "ShortHairTheCaesarSidePart" },
  


            ],

            options4:[
                { labal: "Concerned", value: "Concerned" },
                { labal: "Default", value: "Default" },
                { labal: "Disbelief", value: "Disbelief" },
                { labal: "Eating", value: "Eating" },
                { labal: "Eating", value: "Eating" },
                { labal: "Sad", value: "Sad" },
                { labal: "ScreamOpen", value: "ScreamOpen" },
                { labal: "Serious", value: "Serious" },
                { labal: "Smile", value: "Smile" },
                { labal: "Tongue", value: "Tongue" },
                { labal: "Twinkle", value: "Twinkle" },
                { labal: "Vomit", value: "Vomit" },
            ],

            options5:[
                { labal: "Blank", value: "Blank" },
                { labal: "BeardMedium", value: "BeardMedium" },
                { labal: "BeardLight", value: "BeardLight" },
                { labal: "BeardMagestic", value: "BeardMagestic" },
                { labal: "MoustacheFancy", value: "MoustacheFancy" },
                { labal: "MoustacheMagnum", value: "MoustacheMagnum" },

            ],

            




        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        exportPic() {
            console.log(this.$refs.avatar.$el.outerHTML);
            const link = document.createElement("a");
            let blob = new Blob([this.$refs.avatar.$el.outerHTML], {
                type: "image/svg+xml",
            });
            link.style.display = "none";
            link.href = URL.createObjectURL(blob);
            link.download = "avatar.svg";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.main {
    width: 600px;
    margin: 60px auto;
    text-align: center;
}
.head {
    width: 300px;
    margin: 0px auto;
}
</style>
