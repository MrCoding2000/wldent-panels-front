import {Component, Input, OnInit, Type} from '@angular/core';
import {ToggleSwitch} from "@waldent-panels-front/ui";
import {AdvertisementService} from "../service/advertisement.service";
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";
import {Dialog} from "primeng/dialog";
import {WaldentDialogService} from "@waldent-panels-front/services";

@Component({
  selector: 'app-add-ad-details',
  imports: [
    ToggleSwitch,
    ReactiveFormsModule,
    NgClass,
    Dialog
  ],
  standalone: true,
  templateUrl: './add-edit-advertisement.html',
  styleUrl: './add-edit-advertisement.scss'
})
export class AddEditAdvertisement implements OnInit {
  selectedFile: File | null = null;
  progress: number = 0;
  addEditAdvertisementFormGroup!: FormGroup;

  @Input() id!: number;

  constructor(
    private advertisementService: AdvertisementService,
    private formBuilder: FormBuilder,
    private waldentDialogService: WaldentDialogService) {
  }

  ngOnInit() {
    this.createAddEditAdvertisementForm();
    this.getAdvertisementDataById();
  }

  createAddEditAdvertisementForm(): void {
    this.addEditAdvertisementFormGroup = this.formBuilder.group({
      productName: ['', Validators.required],
      productCost: ['', Validators.required],
      productInventory: [null, Validators.required],
      isStock: [false, Validators.required],
      imageUrlList: [[], Validators.required],
      discount: [null, Validators.required],
      percentDiscount: [null],
      isLongDiscount: [false, Validators.required],
      featuresList: this.formBuilder.array([this.createFeatureItem()]),
      description: [''],
      tagsList: this.formBuilder.array([this.createTagItem()])
    })
  }

  get featuresList(): FormArray {
    return this.addEditAdvertisementFormGroup.get('featuresList') as FormArray;
  }

  get lastFeatureItemInvalid(): boolean {
    if (this.featuresList.length === 0) return false;
    const last = this.featuresList.at(this.featuresList.length - 1) as FormGroup;
    return last.invalid;
  }

  get tagsList(): FormArray {
    return this.addEditAdvertisementFormGroup.get('tagsList') as FormArray;
  }

  get lastTagItemInvalid(): boolean {
    if (this.tagsList.length === 0) return false;
    const last = this.tagsList.at(this.tagsList.length - 1) as FormGroup;
    return last.invalid;
  }

  private createFeatureItem() {
    return this.formBuilder.group({
      featureTitle: ['', Validators.required],
      featureValue: ['', Validators.required]
    })
  }

  private createTagItem() {
    return this.formBuilder.group({
      tagName: ['', Validators.required],
    })
  }

  /**
   * Show Image Upload Rules
   */
  onShowImageUploadRules(componentName: Type<any>, header: string) {
    this.waldentDialogService.openDialog(componentName, header);
  }

  onUploadImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile!, this.selectedFile!.name);
    this.advertisementService.uploadProductImage(formData).subscribe({
      next: (data: any) => {
        // if (data.type === HttpEventType.UploadProgress) {
        //   this.progress = Math.round((100 * data.loaded) / data.total);
        // } else if (data instanceof HttpResponse) {
        //   this.addEditIsoMetricForm?.get('photo')?.setValue(data.body.data.objectName as string);
        //   this.photoPreviewUrl = data.body.data.previewUrl as string;
        //   this.progress = 0;
        // }
      }, error: (error: any) => {
        // this.openSnackBar.openSnackBar(this.translateService.instant(error.error.message), "DangerSnackBar")
      }
    });
  }

  /**
   * Change Long Off Status
   * @param $event
   */
  onChangeLongDiscountStatus($event: boolean) {
    this.addEditAdvertisementFormGroup.get('isLongDiscount')?.setValue($event);
  }

  /**
   * Change Is Stock Goods Status
   * @param $event
   */
  onChangeIsStockGoodsStatus($event: boolean) {
    this.addEditAdvertisementFormGroup.get('isStock')?.setValue($event);
  }

  /**
   * Create Feature Item
   */
  onCreateFeatureItem(): void {
    this.featuresList.push(this.createFeatureItem());
  }

  /**
   * Remove Feature Item
   * @param index
   */
  onRemoveFeatureItem(index: number) {
    this.featuresList.removeAt(index);
  }

  /**
   * Create Feature Item
   */
  onCreateTagItem(): void {
    this.tagsList.push(this.createTagItem());
  }

  /**
   * Remove Feature Item
   * @param index
   */
  onRemoveTagItem(index: number) {
    this.tagsList.removeAt(index);
  }

  onSubmitAddEditAdvertisementForm() {
    console.log(this.addEditAdvertisementFormGroup.value);
  }

  /**
   * TODO: MODEL AND INTEGRATION
   */
  getAdvertisementDataById() {
    this.advertisementService.adverstisementDataById(1).subscribe((data: any) => {
      this.addEditAdvertisementFormGroup.setValue(data);
    })
  }
}
