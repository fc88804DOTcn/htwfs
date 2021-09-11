<template>
  <div id="navigation">
    <!-- LOGO、时间组件、标题、系统操作 -->
    <div class="row">
      <!-- logo+时间 -->
      <div class="logo-timer">
        <img src="../../../assets/logo.png" alt="logo" class="logo" />
        <div class="timmer"></div>
      </div>

      <!-- 标题 -->
      <div class="title">
        <div class="sup">公路交通气象监测与预警系统</div>
        <div class="sub">副标题</div>
      </div>

      <!-- 系统操作 -->
      <div class="system-operation">
        <!-- 针对地图添加的定位操作：仅在首页出现 -->
        <ul class="map">
          <li><i class="iconfont sys-btn">&#xe6de;</i></li>
          <li><i class="iconfont sys-btn">&#xe6dd;</i></li>
          <li><i class="iconfont sys-btn">&#xec32;</i></li>
          <li><i class="iconfont sys-btn">&#xe743;</i></li>
        </ul>
        <!-- 一个鼠标移入滑出的系统菜单 -->
        <li
          @mouseenter="sysBtnMouseOverHander"
          @mouseleave="sysBtnMouseOutHander"
        >
          <i class="iconfont">&#xe6cd;</i>
          <transition
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
          >
            <ul class="system" v-if="showSystemBtn">
            <!-- <ul class="system" v-if="true"> -->
              <li><i class="iconfont">&#xe600;</i></li>
              <li><i class="iconfont">&#xe651;</i></li>
            </ul>
          </transition>
        </li>
      </div>
    </div>

    <!-- 要素展示、报警区域、要素展示 -->

    <div class="row">
      <!-- 要素 -->
      <div class=""></div>

      <!-- 报警 -->
      <div class="title"></div>

      <!-- 要素 -->
      <div class="system-operation"></div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, context) {
    let showSystemBtn = ref(false);

    const sysBtnMouseOverHander = function () {
      showSystemBtn.value = true;
    };
    const sysBtnMouseOutHander = function () {
		showSystemBtn.value = false;
    };

    return {
      sysBtnMouseOverHander,
      sysBtnMouseOutHander,
      showSystemBtn,
    };
  },
});
</script>

<style scoped lang='less'>
#navigation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: url("../../../assets/img/nav-bg.png") repeat;
  padding: 4px;
  box-sizing: border-box;
  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > div {
      flex: 1;
      display: flex;
      box-sizing: border-box;
    }
	.title {
		flex-wrap: wrap;
		> div {
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
			color: white;
		}
		.sup {
			font-size: 24px;
			font-weight: bolder;
			font-family: '仿宋','楷体','微软雅黑';
		}
		.sub {
			font-size: 14px;
			font-family: hind;
		}
	}
    .system-operation {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      ul {
        display: flex;
        i.iconfont {
          font-size: 18px;
          margin: 0 5px;
          color: #0ff;
          transition: all 0.2s;
          &:hover {
            color: #fff;
            cursor: pointer;
          }
        }
      }
      > li {
        position: relative;
        line-height: 1;
        i.iconfont {
          font-size: 18px;
          margin: 0 5px;
          color: #0ff;
          &:hover {
            cursor: default;
          }
        }
        ul.system {
          // right: 4px;
          position: absolute;
          display: flex;

          flex-direction: column;
          li {
            margin: 4px 0px;
            i.iconfont {
              font-size: 18px;
              margin: 0 5px;
              color: #0ff;
              &:hover {
                color: #19939b;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .logo-timer {
      padding: 15px 0px;
      > img {
        width: 8%;
      }
    }
  }
}
</style>