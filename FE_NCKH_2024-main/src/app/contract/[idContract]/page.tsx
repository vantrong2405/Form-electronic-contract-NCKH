import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
//  import file css
import '../../../assets/css/base.css'
import '../../../assets/css/style.css'

export default function page() {
    return (
        <div className='mt-4'>
            <div className='flex justify-between'>
                <div className='mx-auto'>
                    <Card className="w-[480px] card-information">
                        <CardHeader>
                            <CardTitle>Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">AddressWallet</Label>
                                        <Input id="name" placeholder="" disabled />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Your Party</Label>
                                        <Input id="name" placeholder="" disabled />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Contract Status</Label>
                                        <Input id="name" placeholder="" disabled />
                                    </div>

                                </div>
                            </form>
                        </CardContent>
                        <CardFooter>
                            <div className='grid grid-flow-col auto-cols-max gap-2 text-center mx-auto max-w-[100%]'>

                                <button className="outline-none border-none bg-green-400 hover:bg-green-700 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    Accept
                                </button>
                                <button className="outline-none border-none bg-[#FF3131] hover:bg-red-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    Refuse the invition
                                </button>
                                <button className="outline-none border-none bg-slate-600 hover:bg-slate-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    Chat width parties
                                </button>
                            </div>

                        </CardFooter>
                        <CardFooter>
                            <div className='w-full'>
                                <Button className='w-full bg-black hover:bg-slate-600'>Request edit permission</Button>
                                <div className='w-full mt-4'>
                                    <AlertDialog>
                                        <AlertDialogTrigger className='w-full'><Button className='w-full bg-sky-600 hover:bg-sky-400'>Sign a contract</Button></AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Bạn có muốn tiếp tục ?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete your account
                                                    and remove your data from our servers.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction>Continue</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </div>
                        </CardFooter>

                    </Card>
                </div>

                {/* Phần html */}
                <div id="main">
                    <div id="application">
                        <div className="introduce">
                            <h5 className="title text-center">
                                <b>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</b>
                                <div>
                                    <b>Độc lập - Tự do - Hạnh phúc</b>
                                </div>
                                <div>
                                    -------------------------------
                                </div>
                                <div className="flex justify-center align-items-center">
                                    <input type="text" name="" className="input-1 border border-1" />
                                    , ngày
                                    <input type="text" name="" className="input-1 border border-1" />
                                    tháng
                                    <input type="text" name="" className="input-1 border border-1" />
                                    năm
                                    <input type="text" name="" className="input-1 border border-1" />
                                </div>
                            </h5>
                            <h5 className="fw-bold my-3 flex align-items-center justify-center ">THỎA THUẬN CUNG CẤP DỊCH
                                VỤ
                                <input type="text" name="" id="contractType" className="input-3 text-uppercase fw-bold border border-1" />
                            </h5>

                            <div className="flex align-items-center justify-center fw-bold">
                                Số:
                                <input type="text" name="" id="contractNumber" className="input-1 text-uppercase fw-bold border border-1" />
                                /HĐ
                            </div>

                            <div className="law-title">
                                <div>Căn cứ Bộ Luật dân sự số 91/2015/QH13 ngày 24/11/2015;</div>

                                <div>Căn cứ nhu cầu và khả năng thực tế của các bên trong hợp đồng;</div>

                                <div>Căn cứ đơn đề nghị thuê dịch vụ của ông (bà)</div>

                                <div>Hai bên chúng tôi gồm:</div>
                            </div>
                            <div className="wrapper-content">
                                <div className="contentA  my-3">
                                    <div className="fw-bold">BÊN NHÀ CUNG CẤP ( sau đây gọi tắt là Nhà cung cấp ):</div>
                                    <div className="information-A">
                                        <div className="flex align-items-center">
                                            <span className="text-nowrap name">- Tên doanh nghiệp</span>
                                            <input id="supplierName" type="text" className="input-10 border border-1" />
                                        </div>
                                        <div className="flex align-items-center">
                                            <span className="text-nowrap name">- Số CCCD: </span>
                                            <input id="citizenIdentificationSupplier" type="number" className="input-10 border border-1" />
                                        </div>
                                        <div className="flex align-items-center">
                                            <span className="text-nowrap name"> - Người đại diện:</span>
                                            <input id="supplierRepresentative" type="text" className="input-10 border border-1" />
                                        </div>
                                        <div className="flex align-items-center">
                                            <span className="text-nowrap name"> - Địa chỉ cơ quan:</span>
                                            <input id="supplierAddress" type="text" className="input-10 border border-1" />
                                        </div>
                                        <div className="flex align-items-center">
                                            <span className="text-nowrap name"> - Điện thoại:</span>
                                            <input id="supplierPhone" type="number" className="input-10 border border-1" />
                                            <span className="text-nowrap name"> Fax:</span>
                                            <input id="supplierFax" type="number" className="input-10 border border-1" />
                                        </div>
                                        <div className="flex align-items-center">
                                            <span className="text-nowrap name"> - Số tài khoản:</span>
                                            <input id="supplierAccountNumber" type="number" className="input-10 border border-1" />
                                            <span className="text-nowrap name"> tại Kho bạc:</span>
                                            <input id="treasurySupplier" type="text" className="input-10 border border-1" />
                                        </div>
                                    </div>


                                </div>
                                <div className="contentB  my-3">
                                    <div className="fw-bold">BÊN THUÊ DỊCH VỤ ( sau đây gọi tắt khách hàng ):</div>
                                    <div className="information-A">
                                        <div className="flex align-items-center">
                                            <span className="text-nowrap name">- Tên doanh nghiệp</span>
                                            <input id="nameRenting" type="text" className="input-10 border border-1" />
                                        </div>
                                        <div className="flex align-items-center">
                                            <span className="text-nowrap name">- Số CCCD: </span>
                                            <input id="idLessee" type="number" className="input-10 border border-1" />

                                        </div>
                                        <div className="flex align-items-center">
                                            <span className="text-nowrap name"> - Người đại diện:</span>
                                            <input id="lesseeRepresentative " type="text" className="input-10 border border-1" />
                                        </div>
                                        <div className="flex align-items-center">
                                            <span className="text-nowrap name"> - Địa chỉ cơ quan:</span>
                                            <input id="addressLessee" type="text" className="input-10 border border-1" />
                                        </div>
                                        <div className="flex align-items-center">
                                            <span className="text-nowrap name"> - Điện thoại:</span>
                                            <input id="lesseePhone" type="number" className="input-10 border border-1" />
                                            <span className="text-nowrap name"> Số tài khoản:</span>
                                            <input id="lesseeAccountNumber" type="number" className="input-10 border border-1" />
                                        </div>

                                    </div>


                                </div>
                                <div className="flex align-items-center fw-bold my-2">
                                    <span className="text-nowrap">Thỏa thuận cung cấp này Thỏa thuận được ký kết vào
                                        ngày</span>
                                    <input id="startedAt" type="date" name="" className="input-10 border border-1" />

                                </div>
                                <div className="flex align-items-center fw-bold my-2">
                                    <span className="text-nowrap"> Ngày có hiệu lực, Và được kết thúc
                                        vào ngày
                                    </span>
                                    <input id="endedAt" type="date" name="" className="input-10 border border-1" />

                                </div>

                                <div className="flex align-items-center fw-bold my-2">
                                    <div className="text-nowrap"> Hai bên thống nhất ký kết hợp đồng

                                        với các nội dung sau đây:
                                    </div>
                                </div>
                            </div>
                            <div className="content-contract">
                                <div className="description my-2">
                                    <b>CÁC ĐIỀU KHOẢN CHÍNH</b>
                                    <ul className="des">
                                        Nhà cung cấp đồng ý cung cấp cho Khách hàng và Khách hàng đồng ý mua từ Nhà cung cấp những
                                        hàng hóa và/hoặc sản phẩm sau:
                                        <div className="mb-3">
                                            <textarea className="content-agree" id="agreementDetails" ></textarea>
                                        </div>
                                        <i>“Mỗi điều khoản người dùng hãy viết xuống một dòng riêng biệt”</i>
                                    </ul>
                                </div>
                                <div className="contract-object my-2">
                                    <b>Điều 1. Đối tượng Hợp đồng</b>
                                    <div className="justify-text">Số lượng Hàng hóa do Nhà cung cấp cung cấp cũng như mọi yêu cầu
                                        đặt
                                        hàng tối thiểu hoặc tối
                                        đa
                                        sẽ được quy định cụ thể trong các đơn đặt hàng riêng lẻ do Khách hàng phát hành và được Nhà
                                        cung
                                        cấp chấp nhận.
                                    </div>
                                </div>
                                <div className="responsibilities-buyer my-2">
                                    <b>Điều 2. Trách nhiệm của Bên mua</b>
                                    <div className="justify-text">
                                        Bên mua cam kết thanh toán cho Bên bán giá trị hợp đồng nêu tại Điều 5 của Hợp đồng này theo
                                        phương thức được quy định trong điều kiện cụ thể của Hợp đồng cũng như thực hiện đầy đủ
                                        nghĩa vụ và trách nhiệm khác được quy định trong điều kiện chung và điều kiện cụ thể của Hợp
                                        đồng.
                                    </div>
                                </div>
                                <div className="value-and-payment my-2">
                                    <b>Điều 3. Giá trị hợp đồng và phương thức thanh toán.</b>
                                    <div className="justify-text">
                                        Phương thức thanh toán: Thanh toán theo phương thức nêu trong điều kiện cụ thể của Hợp
                                        đồng.

                                    </div>
                                </div>
                                <div className="contract-type flex align-items-center">
                                    <span className="text-nowrap name justify-text" > <b>Điều 4. Loại hợp
                                        đồng:</b></span>
                                    <input id="selectOption" type="text" className="input-10 border border-1" />
                                </div>
                                <div className="execution-time flex align-items-center">
                                    <span className="text-nowrap name justify-text"> <b>Điều 5. Thời gian giao
                                        hàng:</b></span>
                                    <input id="date" type="date" className="input-10 border border-1" />
                                </div>
                                <div className="clause my-2">
                                    <b>Điều 6. Một số điều khoản khác.</b>
                                    <div className="">
                                        1– Trong quá trình thực hiện Hợp đồng này, nếu phát sinh một số vấn đề, vi phạm các điều
                                        khoản, các bên phải kịp thời
                                        báo cho nhau biết và chủ động bàn bạc, thương lượng giải quyết trên nguyên tắc tôn trọng
                                        quyền lợi của nhau (có lập biên bản ghi toàn bộ nội dung đó).
                                        <br />

                                        <span className=''>
                                            <span> 2– Mọi vấn đề phát sinh từ hợp đồng này mà các bên không tự
                                                giải quyết được sẽ được giải
                                                quyết chung thẩm tại
                                            </span>
                                            <span>
                                                <input type="text" className="input-10 border border-1" />
                                            </span>
                                        </span>

                                        3– Một số điều khoản khác về hợp đồng như sau:
                                        <ul>
                                            <textarea className="content-agree list-goods" id="commodityCategory"
                                            ></textarea>
                                        </ul>
                                        <div className="content"><i>“Mỗi điều khoản người dùng hãy viết xuống một dòng riêng
                                            biệt”</i>
                                        </div>
                                    </div>
                                </div>

                                <div className="effect">
                                    <div className="effect__title">
                                        <b>Điều 7. Hiệu lực hợp đồng</b>
                                    </div>
                                    <div className="effect__establish">
                                        <div>1. Hợp đồng có hiệu lực kể từ
                                            <input type="text" name="" className="input-1 border border-1" />
                                            , ngày
                                            <input type="text" name="" className="input-1 border border-1" />
                                            tháng
                                            <input type="text" name="" className="input-1 border border-1" />
                                            năm
                                            <input type="text" name="" className="input-1 border border-1" />
                                        </div>
                                        <div>2. Hợp đồng hết hiệu lực sau khi hai bên tiến hành thanh lý Hợp đồng theo luật định.
                                        </div>
                                        <div>3. Hợp đồng được lập thành Hợp đồng có giá trị pháp lý như nhau.</div>
                                    </div>
                                    <div className="signature">
                                        <div className="buyer">
                                            <b className="buyer--b">BÊN MUA</b>
                                            <div><i>(Chữ ký, họ tên)</i></div>
                                            <input id="partyASign" type="text" className="input-signature border border-1" />
                                        </div>
                                        <div className="seller">
                                            <b className="seller--b">BÊN BÁN</b>
                                            <div><i>(Chữ ký, họ tên)</i></div>
                                            <input id="partyBSign" type="text" className="input-signature border border-1" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* alert dialog */}


            {/* end alert dialog */}
        </div >
    )
}
