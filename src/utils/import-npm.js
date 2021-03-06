/*
 * @Author: zhen-0
 * @Date: 2022-07-09 22:44:26
 * @Description:用于自动导入npm包的默认导出
 */

// 导出dayjs,并用插件自动导出
import dayjs_ from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
export { default as lottie } from 'lottie-web'
export { default as svga } from 'svgaplayerweb'

export const relativeTimeDayjs = () => {
  dayjs_.extend(relativeTime)
}
export const dayjs = dayjs_
